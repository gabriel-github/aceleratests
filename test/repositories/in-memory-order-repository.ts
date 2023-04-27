import {
  OrderRepository,
  Item,
  Order,
} from 'src/application/repositories/order-repository';

export class InMemoryOrderRepository implements OrderRepository {
  public order: Order = {
    id: '1',
    items: [],
  };

  async addItemToOrder(item: Item): Promise<Item> {
    const itemAlreadyExist = this.order.items.find(
      (itemOrder) => itemOrder.id === item.id,
    );

    if (itemAlreadyExist) {
      throw new Error(`Item with ID ${item.id} already exist in order.`);
    }

    this.order.items.push(item);

    return item;
  }

  async showOrder(): Promise<Order> {
    return this.order;
  }

  async removeItemToOrder(id: string): Promise<Item> {
    const itemThatWillBeRemoved = this.order.items.find(
      (item) => item.id === id,
    );

    if (!itemThatWillBeRemoved) {
      throw new Error(`Item with ID ${id} not found in order.`);
    }

    const itemsUpdated = this.order.items.filter((item) => item.id !== id);

    this.order.items = itemsUpdated;

    return itemThatWillBeRemoved;
  }

  async alterQuantityItemOrder(id: string, quantity: number): Promise<Item> {
    const itemIndex = this.order.items.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
      throw new Error(`Item with ID ${id} not found in order.`);
    }
    const item = this.order.items[itemIndex];
    const newItem = { ...item, quantity: quantity };
    this.order.items.splice(itemIndex, 1, newItem);
    return newItem;
  }

  async closeOrder(): Promise<Order> {
    this.order.finishedDate = new Date();

    return this.order;
  }
}

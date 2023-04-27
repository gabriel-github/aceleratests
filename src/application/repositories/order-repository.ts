export interface Item {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  items: Item[];
  finishedDate?: Date;
}

export abstract class OrderRepository {
  abstract addItemToOrder(item: Item): Promise<Item>;
  abstract removeItemToOrder(id: string): Promise<Item>;
  abstract alterQuantityItemOrder(id: string, quantity: number): Promise<Item>;
  abstract showOrder(): Promise<Order>;
  abstract closeOrder(): Promise<Order>;
}

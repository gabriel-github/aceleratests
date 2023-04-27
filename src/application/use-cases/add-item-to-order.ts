import { BadRequestException, Injectable } from '@nestjs/common';
import {
  OrderRepository,
  Item,
} from 'src/application/repositories/order-repository';

interface Request {
  item: Item;
}

@Injectable()
export class AddItemToOrder {
  constructor(private orderRepository: OrderRepository) {}

  async execute({ item }: Request) {
    try {
      const itemAdded = await this.orderRepository.addItemToOrder(item);

      return { item: itemAdded };
    } catch (err) {
      throw new BadRequestException('Item already exists in order!');
    }
  }
}

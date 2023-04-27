import { BadRequestException, Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/application/repositories/order-repository';

interface Request {
  id: string;
}

@Injectable()
export class RemoveItemToOrder {
  constructor(private orderRepository: OrderRepository) {}

  async execute({ id }: Request) {
    try {
      const itemRemoved = await this.orderRepository.removeItemToOrder(id);

      return { item: itemRemoved };
    } catch (err) {
      throw new BadRequestException('Item not found!');
    }
  }
}

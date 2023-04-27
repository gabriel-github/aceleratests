import { BadRequestException, Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/application/repositories/order-repository';

interface Request {
  id: string;
  quantity: number;
}

@Injectable()
export class AlterQuantityItemOrder {
  constructor(private orderRepository: OrderRepository) {}

  async execute({ id, quantity }: Request) {
    try {
      const item = await this.orderRepository.alterQuantityItemOrder(
        id,
        quantity,
      );

      return { item };
    } catch (err) {
      throw new BadRequestException('Item not found!');
    }
  }
}

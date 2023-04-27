import { Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/application/repositories/order-repository';

@Injectable()
export class CloseOrder {
  constructor(private orderRepository: OrderRepository) {}

  async execute() {
    return await this.orderRepository.closeOrder();
  }
}

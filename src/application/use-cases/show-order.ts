import { Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/application/repositories/order-repository';

@Injectable()
export class ShowOrder {
  constructor(private orderRepository: OrderRepository) {}

  async execute() {
    const order = await this.orderRepository.showOrder();

    return { order };
  }
}

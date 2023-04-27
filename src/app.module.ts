import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddItemToOrder } from 'src/application/use-cases/add-item-to-order';
import { OrderRepository } from 'src/application/repositories/order-repository';
import { InMemoryOrderRepository } from 'test/repositories/in-memory-order-repository';
import { ShowOrder } from 'src/application/use-cases/show-order';
import { RemoveItemToOrder } from 'src/application/use-cases/remove-item-to-order';
import { AlterQuantityItemOrder } from 'src/application/use-cases/alter-quantity-item-order';
import { CloseOrder } from 'src/application/use-cases/close-order';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    AddItemToOrder,
    ShowOrder,
    RemoveItemToOrder,
    AlterQuantityItemOrder,
    CloseOrder,
    { provide: OrderRepository, useClass: InMemoryOrderRepository },
  ],
})
export class AppModule {}

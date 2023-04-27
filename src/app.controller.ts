import { AlterQuantityItemOrder } from './application/use-cases/alter-quantity-item-order';
import { AddItemToOrder } from './application/use-cases/add-item-to-order';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Item } from 'src/application/repositories/order-repository';
import { RemoveItemToOrder } from 'src/application/use-cases/remove-item-to-order';
import { ShowOrder } from 'src/application/use-cases/show-order';
import { CloseOrder } from 'src/application/use-cases/close-order';

@Controller('/cart')
export class AppController {
  constructor(
    private addItemToOrder: AddItemToOrder,
    private showOrder: ShowOrder,
    private removeItemToOrder: RemoveItemToOrder,
    private alterQuantityItemOrder: AlterQuantityItemOrder,
    private closeOrder: CloseOrder,
  ) {}

  @Post('/add-item-to-order')
  addItem(@Body() body: Item) {
    return this.addItemToOrder.execute({ item: body });
  }

  @Get('/show-order')
  showItemsCart() {
    return this.showOrder.execute();
  }

  @Get('/close-order')
  closeOrderPurchase() {
    return this.closeOrder.execute();
  }

  @Patch('/alter-quantity-item-order')
  alterQuantity(@Body() body: { id: string; quantity: number }) {
    return this.alterQuantityItemOrder.execute(body);
  }

  @Delete('/remove-item-to-order/:id')
  removeItem(@Param('id') id: string) {
    return this.removeItemToOrder.execute({ id });
  }
}

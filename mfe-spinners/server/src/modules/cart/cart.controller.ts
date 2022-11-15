import { JwtAuthGuard } from './../../auth/jwt-auth.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Cart, CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getById(@Request() request): Promise<Cart> {
    return this.cartService.getById(request.user.userId);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Request() request,
    @Body() { id }: { id: string },
  ): Promise<Cart> {
    return this.cartService.create(request.user.userId, Number(id));
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async delete(@Request() request): Promise<Cart> {
    return this.cartService.delete(request.user.userId);
  }
}

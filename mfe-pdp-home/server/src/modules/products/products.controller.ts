import { Controller, Get, Param } from '@nestjs/common';
import { Product, ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async index(): Promise<Product[]> {
    return this.productsService.findProducts();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Product> {
    return this.productsService.findProductById(id);
  }
}

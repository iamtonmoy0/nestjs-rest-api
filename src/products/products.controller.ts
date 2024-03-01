import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { Product } from './dto/product.dto';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(@Req() req: Request, @Res() res: Response): void {
    res.json({ msg: 'hello' });
  }
  @Post('/:id')
  findById(@Param() params) {
    return params;
  }
  @Post('/:id')
  create(@Body() product: Product) {
    return product;
  }
}

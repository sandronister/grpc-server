import { ProductController } from './product/product.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [
    ProductController,],
  providers: [],
})
export class AppModule { }

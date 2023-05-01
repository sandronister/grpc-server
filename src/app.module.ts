import { CoreModule } from './core/core.module';
import { ProductController } from './product/product.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [CoreModule],
  controllers: [ProductController],
  providers: [],
})
export class AppModule {}

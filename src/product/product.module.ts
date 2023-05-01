import { ProductService } from './product.service';
import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './entity/product.entity';


@Module({
    imports: [
        MongooseModule.forFeature([{name:'Product',schema:ProductSchema}])
    ],
    controllers: [ProductController],
    providers: [
        ProductService,],
})
export class ProductModule {}
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entity/product.entity';
import { Model } from 'mongoose';
import { ProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {

    constructor(
        @InjectModel(Product.name) private productModel: Model<Product>
    ){}

    async create(productDTO:ProductDTO):Promise<any>{
        const createProduct = new this.productModel(productDTO);
        const prod =  await createProduct.save()
        return {
            id:prod.id.toString(),
            name:prod.name, 
            price:prod.price
        }
    }
}

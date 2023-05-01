import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  
  constructor(private readonly productService:ProductService){}

  @GrpcMethod('ProductService')
  async create(data:ProductDTO, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    return  await this.productService.create(data);
  }
}

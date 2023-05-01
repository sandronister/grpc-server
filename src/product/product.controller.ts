import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ProductDTO } from './dto/product.dto';

@Controller()
export class ProductController {
  

  @GrpcMethod('ProductService')
  create(data:ProductDTO, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    console.log(data, 'aqui');
    return { id: 1, ...data };
  }
}

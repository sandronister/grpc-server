import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { EnviromentSchema } from './core/enviroment.schema';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: EnviromentSchema.url,
      package: 'product',
      protoPath: join(__dirname, 'product/proto/product.proto'),
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
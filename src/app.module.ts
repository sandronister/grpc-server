import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CoreModule } from './core/core.module';
import { Module } from '@nestjs/common';
import { EnviromentSchema } from './core/enviroment.schema';

const databaseConnection = [
  MongooseModule.forRoot(`${EnviromentSchema.stringConnection}`),
];

@Module({
  imports: [
    ProductModule,
    CoreModule,
    ...databaseConnection
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
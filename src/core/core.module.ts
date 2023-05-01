import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configSchema } from './config.schema';
import { validationSchema } from './validation.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configSchema],
      validationSchema,
    }),
  ],
  controllers: [],
  providers: [],
})
export class CoreModule {}

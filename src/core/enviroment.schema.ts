import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

export class EnviromentSchema {
  static readonly main = configService.get('NODE_ENV');
  static readonly stringConnection = configService.get('STRING_CONNECTION');
  static readonly url=configService.get('URL')
}

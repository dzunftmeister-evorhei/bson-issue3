import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';

const hostname = process.env.HOSTNAME || 'localhost';
const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(port, hostname);
  Logger.log(`🚀 Server running on http://${hostname}:${port}`, 'Bootstrap');
}
bootstrap();

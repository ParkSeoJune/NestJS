import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      // true로 설정하면 아무 decorator도 없는 어떠한 property의 object를 거른다
      forbidNonWhitelisted: true,
      transform: true, // 유저들이 보낸 타입을 우리가 원하는 타입으로 바꿈
    }),
  );
  await app.listen(3000);
}
bootstrap();

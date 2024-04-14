import { Module } from '@nestjs/common';
import { TokenInfoController } from './app.controller';
import { KeyValidationService } from './app.service';

@Module({
  imports: [],
  controllers: [TokenInfoController],
  providers: [KeyValidationService],
})
export class AppModule {}

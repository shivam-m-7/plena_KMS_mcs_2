/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { TokenInfoController } from './app.controller';
import { KeyValidationService } from './app.service';

describe('AppController', () => {
  let appController: TokenInfoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TokenInfoController],
      providers: [KeyValidationService],
    }).compile();

    appController = app.get<TokenInfoController>(TokenInfoController);
  });
  
});

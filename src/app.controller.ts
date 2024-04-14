/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Param,
  HttpStatus,
  HttpException,
} from '@nestjs/common';

@Controller('token-info')
export class TokenInfoController {
  @Get(':key')
  getTokenInfo(@Param('key') key: string) {
    const mockToken = {
      token: 'token11111',
      expiration: '12-08-2026',
      userId: '14441',
    };
    if (isValidKey(key)) {
      return mockToken;
    } else {
      throw new HttpException(
        'Invalid or expired key',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}



function isValidKey(key: string): boolean {
 
  return key === 'validkey';
}
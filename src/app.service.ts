/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class KeyValidationService {
  isValidKey(key: string): boolean {
    return key === 'validkey';
  }
}
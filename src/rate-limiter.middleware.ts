/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  NestMiddleware,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RateLimitMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const key = req.params.key;
    if (!this.checkRateLimit(key)) {
      throw new HttpException(
        'Rate limit reached',
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }
    next();
  }

  checkRateLimit(key: string): boolean {
    const rateLimitMap = new Map<string, number>();
    const currentTime = Date.now();
    const windowDuration = 60 * 1000;
    const maxRequestsPerMinute = 100;
    if (rateLimitMap.has(key)) {
      const lastRequestTime = rateLimitMap.get(key);
      const requestsInWindow =
        rateLimitMap.size -
        Array.from(rateLimitMap.values()).filter(
          (time) => currentTime - time < windowDuration,
        ).length;
      if (requestsInWindow >= maxRequestsPerMinute) {
        return false;
      }
    } else {
      rateLimitMap.set(key, currentTime);
    }
    return true;
  }
}

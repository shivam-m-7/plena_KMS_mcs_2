import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const key = request.params.key;
    const timestamp = new Date().toISOString();
    return next.handle().pipe(
      tap(() => {
        console.log(
          `[${timestamp}] Key: ${key}, Request: ${request.url}, Status: ${HttpStatus.OK}`,
        );
      }),
    );
  }
}

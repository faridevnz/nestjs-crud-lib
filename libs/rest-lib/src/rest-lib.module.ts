import { Module } from '@nestjs/common';
import { RestLibService } from './rest-lib.service';

@Module({
  providers: [RestLibService],
  exports: [RestLibService],
})
export class RestLibModule {}

import { Module } from '@nestjs/common';
import { TypeMongoDBModule } from 'nestjs-type-mongodb';

import { Demo } from './demo.entity';
import { DemoResolver } from './demo.resolver';
import { DemoService } from './demo.service';

@Module({
  imports: [TypeMongoDBModule.forFeature([Demo])],
  providers: [DemoResolver, DemoService],
})
export class DemoModule {}

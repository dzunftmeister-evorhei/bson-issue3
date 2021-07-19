import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeMongoDBModule } from 'nestjs-type-mongodb';

import { AppController } from './app.controller';
import { DemoModule } from './demo/demo.module';

@Module({
  imports: [
    TypeMongoDBModule.forRoot({
      uri: 'mongodb://localhost/test',
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    DemoModule,
  ],
  controllers: [AppController],
})
export class AppModule {}

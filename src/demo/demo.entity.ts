import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongodb';

@ObjectType()
export class Demo {
  @Field(() => ID)
  id!: ObjectId;

  @Field()
  name!: string;
}

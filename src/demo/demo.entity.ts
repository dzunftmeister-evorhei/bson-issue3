import { Field, ID, Int, ObjectType, InputType, ArgsType } from '@nestjs/graphql';
import { IsOptional, Length, Max, Min } from 'class-validator';
import { Document, Id, Field as Prop } from 'type-mongodb';
import { ObjectId } from 'mongodb';

@Document({ collection: 'demo' })
@ObjectType()
export class Demo {
  @Id({ name: '_id' })
  @Field(() => ID)
  id!: ObjectId;

  @Prop()
  @Field()
  name!: string;

  @Prop()
  @Field()
  address!: string;

  @Prop()
  @Field()
  zip!: string;

  @Prop()
  @Field()
  city!: string;

  @Prop()
  @Field(() => Int)
  age!: number;

  @Prop()
  @Field({ nullable: true })
  email!: string | null;
}

@InputType()
export class DemoInput {
  @Field()
  name!: string;

  @Field()
  @Length(2, 50)
  address!: string;

  @Field()
  zip!: string;

  @Field()
  city!: string;

  @Field(() => Int)
  @Min(0)
  @Max(135)
  age!: number;

  @Field({ nullable: true })
  @IsOptional()
  email: string | null;
}

@InputType()
export class DemoUpdate {
  @Field()
  @IsOptional()
  name?: string;

  @Field()
  @IsOptional()
  @Length(2, 50)
  address?: string;

  @Field()
  @IsOptional()
  zip?: string;

  @Field()
  @IsOptional()
  city?: string;

  @Field(() => Int)
  @IsOptional()
  @Min(0)
  @Max(135)
  age?: number;

  @Field({ nullable: true })
  @IsOptional()
  email?: string | null;
}

@ArgsType()
export class DemoArgs {
  @Field(() => Int)
  @Min(0)
  skip = 0;

  @Field(() => Int)
  @Min(1)
  @Max(100)
  take = 25;
}

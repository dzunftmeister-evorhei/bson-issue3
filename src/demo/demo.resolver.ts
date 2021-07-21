import { Resolver, Query, Args } from '@nestjs/graphql';

import { Demo } from './demo.entity';

@Resolver('Demo')
export class DemoResolver {
  @Query(() => Demo)
  async demo(@Args('id') id: string) {
    return `demo: ${id}`;
  }
}

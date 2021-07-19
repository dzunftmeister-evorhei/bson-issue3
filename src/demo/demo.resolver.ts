import { NotFoundException } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { Demo, DemoInput, DemoUpdate, DemoArgs } from './demo.entity';
import { DemoService } from './demo.service';

@Resolver('Demo')
export class DemoResolver {
  constructor(private readonly demoService: DemoService) {}

  @Query(() => Demo)
  async demo(@Args('id') id: string) {
    const demo = await this.demoService.findOne(id);
    if (!demo) {
      throw new NotFoundException(`Demo with id '${id}' not found`);
    }
    return demo;
  }

  @Query(() => [Demo])
  async demos(@Args() demoArgs: DemoArgs) {
    return this.demoService.findAll(demoArgs);
  }

  @Mutation(() => Demo)
  async addDemo(@Args('input') input: DemoInput) {
    return await this.demoService.create(input);
  }

  @Mutation(() => Demo)
  async editDemo(@Args('id') id: string, @Args('input') input: DemoUpdate) {
    const demo = await this.demoService.update(id, input);
    if (!demo) {
      throw new NotFoundException(`Demo with id '${id}' not found`);
    }
    return demo;
  }

  @Mutation(() => String)
  async removeDemo(@Args('id') id: string) {
    return await this.demoService.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from 'nestjs-type-mongodb';
import { Repository } from 'type-mongodb';
import { ObjectId } from 'mongodb';

import { Demo, DemoInput, DemoUpdate, DemoArgs } from './demo.entity';

@Injectable()
export class DemoService {
  constructor(
    @InjectRepository(Demo)
    private readonly demoRepository: Repository<Demo>,
  ) {}

  // TODO: filter, sort
  async findAll(args: DemoArgs = { skip: 0, take: 25 }, filter = {}): Promise<Demo[]> {
    const { skip, take: limit } = args;
    return this.demoRepository.find(filter, { skip, limit }).toArray();
  }

  async findOne(id: string): Promise<Demo> {
    return this.demoRepository.findOne({ _id: new ObjectId(id) });
  }

  async create(input: DemoInput): Promise<Demo> {
    return this.demoRepository.create({
      ...input,
    });
  }

  async update(id: string, input: DemoUpdate): Promise<Demo> {
    const res = await this.demoRepository.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...input } },
    );

    if (res.matchedCount !== 1) {
      return;
    }

    return this.findOne(id);
  }

  async delete(id: string): Promise<string> {
    await this.demoRepository.deleteOne({ _id: new ObjectId(id) });
    return id;
  }
}

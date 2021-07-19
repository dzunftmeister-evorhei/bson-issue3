import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  findAll(): string {
    return 'welcome to the backend. system is up and running 💪';
  }
}

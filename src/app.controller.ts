import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('posts')
  async getPosts(@Query() query): Promise<string> {
    return await this.appService.getPosts(query.page, query.category);
  }
  @Get('post')
  async getPost(@Query() query): Promise<string> {
    return await this.appService.getPost(query.id);
  }
  @Get('categories')
  async getCategories(@Query() query): Promise<string[]> {
    return this.appService.getCategories();
  }
}

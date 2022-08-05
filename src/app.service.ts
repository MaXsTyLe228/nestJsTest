import { Injectable } from '@nestjs/common';
import { categories } from "./db/consts";

const Post = require("./db/model/post");

interface IPostParams {
  category?: string;
};

@Injectable()
export class AppService {
  async getPosts(page, category?): Promise<string> {
    const params: IPostParams = {}
    if (category) params.category = category
    return await Post.find(params, null, { skip: (page - 1) * 10, limit: 10 });
  }
  
  async getPost(id): Promise<string> {
    return await Post.findById(id);
  }
  
  getCategories(): string[] {
    return categories
  }
}

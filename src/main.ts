import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mongoose from "mongoose";
import { createPosts } from "./db/seed";

const Post = require('./db/model/post')
//createPosts()

const connect = mongoose.connect(process.env.MONGO_URI)
  .then(async () => console.log('connected'))
  .catch(e => console.log(e))

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();

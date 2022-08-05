import { faker } from '@faker-js/faker';
import mongoose from "mongoose";
import { categories } from "./consts";

const Post = require('./model/post')

export const createPosts = async () => {
  await mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      for (let i = 0; i < 20; i++) {
        const post = new Post({
          image: faker.image.abstract(),
          title: faker.random.words(2),
          category: categories[Math.floor(Math.random() * categories.length)],
          date: faker.date.between('2022-01-01T00:00:00.000Z', '2022-08-05T00:00:00.000Z'),
          short_description: faker.lorem.words(5),
          full_description: faker.lorem.words(50),
          likes: faker.datatype.number(2000000),
        })
        post.save()
          .then((result) => console.log(result))
          .catch(e => {
            console.log(e)
          })
      }
    })
}
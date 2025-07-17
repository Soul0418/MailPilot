import { db } from "./server/db";

await db.user.create({
  data: {
    email: 'test@gmail.com',
    name: 'test',
  }
});
console.log('done');

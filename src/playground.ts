

import { db } from "./server/db";


  await db.User.create({
    data: {
      emailAddress: 'abc@gmail.com',
      firstName: 'test',
      lastName: 'test'
    }
  });
  console.log('done');



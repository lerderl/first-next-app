import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

// Create a snippet
db.snippet.create({
  data: {
    title: 'Title',
    code: 'const db = new PrismaClient();'
  }
})

---
title: "Prisma error when doing upsert"
description: "When implementing upsert through Prisma you need to make sure that the where clause contains a unique column only"
date: 2022-07-27T03:34:00.000Z
topic: [prisma]
series: [""]
draft: false
---
When implementing upsert through Prisma you need to make sure that the where clause contains a unique column only.

Here is an example on how to do an upsert in Prisma
```
const upsertUser = await prisma.user.upsert({
  where: {
    email: 'viola@prisma.io',
  },
  update: {
    name: 'Viola the Magnificent',
  },
  create: {
    email: 'viola@prisma.io',
    name: 'Viola the Magnificent',
  },
})
```

In where clause, we include the column that we want to check on database, is it exists or not. If not then we'll create a new record.

## How to solve prisma upsert error
When trying this with different column on where cluase, I got
```
Request error PrismaClientValidationError:  
Invalid `prisma.user.upsert()` invocation:  
Unknown arg `column_name` in where.column_name for type UserWhereUniqueInput. Available args:
```

Which is caused by the column I provided is not a unique column.

## How to make a unique column in Prisma
To do this, we need to add @unique at prisma.schema and migrate our changes.
For example
```
column_name  String  @unique
```

Then you can try it again!



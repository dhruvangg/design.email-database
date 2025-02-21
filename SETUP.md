## To update schemas

1. modify schema.prisma

## After changing schema

1. Prisma Generate using `npx prisma generate` [OPTIONAL]
2. Prisma Migrate `npx prisma migrate dev --name <migration-name>`
3.

### .env file

```bash
DATABASE_URL="file:./dev.db"
```

### Testing

0. Modify the sample.ts file for testing
1. Run `npm run build
2. Run `node dist/sample.js`
3. If needed modify services

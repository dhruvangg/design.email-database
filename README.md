# Usage

- `npm install -g design.email-database`
- add `.env` file
- run `npx prisma generate --schema=./node_modules/design.email-database/dist/prisma/schema.prisma`

### Get Emails


| function | description | return type |
|--|--|--|
| `getEmails()` | get all emails with pagination | `Promise<Email[]>` |
| `getEmail(id)`| get email by id | `Promise<Email>` |
| `getEmailByQuery(query)`| get email by query | `Promise<Email>` |
| `deleteEmail(id)`| delete email by id | `Promise<Email>` |
| `createEmail(email)`| create email | `Promise<Email>` |
| `updateEmail(id, email)`| update email by id | `Promise<Email>` |


### Get Brands

| function | description | return type |
|--|--|--|
| `getBrands()` | get all brands with pagination | `Promise<Brand[]>` |
| `getBrand(id)`| get brand by id | `Promise<Brand>` |
| `getBrandByQuery(query)`| get brand by query | `Promise<Brand>` |
| `deleteBrand(id)`| delete brand by id | `Promise<Brand>` |
| `createBrand(brand)`| create brand | `Promise<Brand>` |
| `updateBrand(id, brand)`| update brand by id | `Promise<Brand>` |

/*
  Warnings:

  - The primary key for the `Emails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Emails` table. All the data in the column will be lost.
  - The required column `_id` was added to the `Emails` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Emails" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "subject" TEXT NOT NULL,
    "sender" TEXT,
    "body" TEXT NOT NULL,
    "html" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "tags" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Emails" ("body", "createdAt", "html", "image", "messageId", "sender", "subject", "tags", "updatedAt") SELECT "body", "createdAt", "html", "image", "messageId", "sender", "subject", "tags", "updatedAt" FROM "Emails";
DROP TABLE "Emails";
ALTER TABLE "new_Emails" RENAME TO "Emails";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

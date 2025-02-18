-- CreateTable
CREATE TABLE "Emails" (
    "id" TEXT NOT NULL PRIMARY KEY,
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

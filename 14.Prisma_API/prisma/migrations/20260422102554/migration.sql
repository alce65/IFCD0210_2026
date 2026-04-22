-- AlterTable
ALTER TABLE "animals" ALTER COLUMN "created_at" SET DEFAULT (now()),
ALTER COLUMN "updated_at" SET DEFAULT (now());

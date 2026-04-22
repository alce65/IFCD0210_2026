/*
  Warnings:

  - The `lifestyle` column on the `animals` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Lifestyle" AS ENUM ('Diurno', 'Nocturno');

-- AlterTable
ALTER TABLE "animals" ADD COLUMN     "created_at" TIMESTAMP(0) NOT NULL DEFAULT (now()),
ADD COLUMN     "updated_at" TIMESTAMP(0) NOT NULL DEFAULT (now()),
DROP COLUMN "lifestyle",
ADD COLUMN     "lifestyle" "Lifestyle";

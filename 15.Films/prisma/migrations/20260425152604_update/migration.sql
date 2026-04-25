/*
  Warnings:

  - The primary key for the `films` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `movie_id` on the `films` table. All the data in the column will be lost.
  - You are about to drop the column `firstname` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `suername` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the `_FilmToGenre` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `genres` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `first_name` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surname` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rate` to the `reviews` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'EDITOR', 'ADMIN');

-- DropForeignKey
ALTER TABLE "_FilmToGenre" DROP CONSTRAINT "_FilmToGenre_A_fkey";

-- DropForeignKey
ALTER TABLE "_FilmToGenre" DROP CONSTRAINT "_FilmToGenre_B_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_film_id_fkey";

-- AlterTable
ALTER TABLE "films" DROP CONSTRAINT "films_pkey",
DROP COLUMN "movie_id",
ADD COLUMN     "film_id" SERIAL NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "films_pkey" PRIMARY KEY ("film_id");

-- AlterTable
ALTER TABLE "genres" ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "firstname",
DROP COLUMN "suername",
ADD COLUMN     "first_name" VARCHAR(200) NOT NULL,
ADD COLUMN     "surname" VARCHAR(200) NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "reviews" ADD COLUMN     "rate" DECIMAL(3,1) NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "password" SET DATA TYPE VARCHAR(255);

-- DropTable
DROP TABLE "_FilmToGenre";

-- CreateTable
CREATE TABLE "_films_genres" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_films_genres_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_films_genres_B_index" ON "_films_genres"("B");

-- CreateIndex
CREATE UNIQUE INDEX "genres_name_key" ON "genres"("name");

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_film_id_fkey" FOREIGN KEY ("film_id") REFERENCES "films"("film_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_films_genres" ADD CONSTRAINT "_films_genres_A_fkey" FOREIGN KEY ("A") REFERENCES "films"("film_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_films_genres" ADD CONSTRAINT "_films_genres_B_fkey" FOREIGN KEY ("B") REFERENCES "genres"("genre_id") ON DELETE CASCADE ON UPDATE CASCADE;

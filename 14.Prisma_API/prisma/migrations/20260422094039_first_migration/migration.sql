-- CreateTable
CREATE TABLE "animals" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "english_name" VARCHAR(255) NOT NULL,
    "sci_name" VARCHAR(255) NOT NULL,
    "diet" TEXT,
    "lifestyle" VARCHAR(20),
    "location" TEXT,
    "slogan" TEXT,
    "group_name" VARCHAR(255),
    "image" TEXT,

    CONSTRAINT "animals_pkey" PRIMARY KEY ("id")
);

/*
  Warnings:

  - You are about to drop the column `imageURL` on the `Store` table. All the data in the column will be lost.
  - You are about to drop the column `storeInfo` on the `Store` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Store` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `joinedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Store` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `image_public_id` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `store_info` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Store" DROP CONSTRAINT "Store_userId_fkey";

-- AlterTable
ALTER TABLE "Store" DROP COLUMN "imageURL",
DROP COLUMN "storeInfo",
DROP COLUMN "userId",
ADD COLUMN     "image_public_id" TEXT NOT NULL,
ADD COLUMN     "image_url" TEXT NOT NULL,
ADD COLUMN     "store_info" JSONB NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "firstName",
DROP COLUMN "joinedAt",
DROP COLUMN "lastName",
DROP COLUMN "token",
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "joinedat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "last_name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Courier" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "shippers" JSONB NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Courier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TemporaryData" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TemporaryData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Courier_id_key" ON "Courier"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Store_id_key" ON "Store"("id");

-- AddForeignKey
ALTER TABLE "Store" ADD CONSTRAINT "Store_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courier" ADD CONSTRAINT "Courier_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

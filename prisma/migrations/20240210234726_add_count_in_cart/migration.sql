/*
  Warnings:

  - Added the required column `cart_count` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "cart_count" INTEGER NOT NULL;

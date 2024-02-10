/*
  Warnings:

  - Added the required column `product_brand` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_stock` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "product_brand" TEXT NOT NULL,
ADD COLUMN     "product_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "product_stock" INTEGER NOT NULL;

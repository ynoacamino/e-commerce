/*
  Warnings:

  - Added the required column `order_status` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "order_status" TEXT NOT NULL;

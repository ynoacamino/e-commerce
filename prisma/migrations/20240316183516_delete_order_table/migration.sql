/*
  Warnings:

  - The primary key for the `Payment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `payment_id` on the `Payment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_user_id_fkey";

-- AlterTable
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_pkey",
DROP COLUMN "payment_id",
ADD COLUMN     "payment_id" INTEGER NOT NULL,
ADD CONSTRAINT "Payment_pkey" PRIMARY KEY ("payment_id");

-- DropTable
DROP TABLE "Order";

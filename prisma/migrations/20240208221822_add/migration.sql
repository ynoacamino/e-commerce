/*
  Warnings:

  - Added the required column `category_description` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_image` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Category" (
    "category_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "category_name" TEXT NOT NULL,
    "category_description" TEXT NOT NULL,
    "category_image" TEXT NOT NULL
);
INSERT INTO "new_Category" ("category_id", "category_name") SELECT "category_id", "category_name" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

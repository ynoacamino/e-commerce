-- CreateTable
CREATE TABLE "User" (
    "user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "image" TEXT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
    "product_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_name" TEXT NOT NULL,
    "product_price" REAL NOT NULL,
    "product_image" TEXT NOT NULL,
    "product_description" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    CONSTRAINT "Product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category" ("category_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tag" (
    "tag_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tag_name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "TagsOnProducts" (
    "tag_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,

    PRIMARY KEY ("tag_id", "product_id"),
    CONSTRAINT "TagsOnProducts_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tag" ("tag_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TagsOnProducts_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product" ("product_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cart" (
    "user_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,

    PRIMARY KEY ("user_id", "product_id"),
    CONSTRAINT "Cart_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Cart_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product" ("product_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category" (
    "category_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "category_name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Rating" (
    "rating_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rating_rate" REAL NOT NULL,
    "rating_count" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    CONSTRAINT "Rating_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product" ("product_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Rating_product_id_key" ON "Rating"("product_id");

/*
  Warnings:

  - Made the column `image` on table `Item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `logo` on table `Manufacturer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "image" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Manufacturer" ALTER COLUMN "logo" SET NOT NULL,
ALTER COLUMN "logo" SET DATA TYPE TEXT;

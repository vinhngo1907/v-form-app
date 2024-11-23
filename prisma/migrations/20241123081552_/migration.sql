/*
  Warnings:

  - Added the required column `content` to the `FormSubmissions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FormSubmissions" ADD COLUMN     "content" TEXT NOT NULL;

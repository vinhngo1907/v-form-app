-- DropIndex
DROP INDEX "Form_name_userId_key";

-- AlterTable
ALTER TABLE "Form" ALTER COLUMN "userId" SET DATA TYPE TEXT;

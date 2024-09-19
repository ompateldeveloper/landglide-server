/*
  Warnings:

  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Location` DROP FOREIGN KEY `Location_userId_fkey`;

-- DropTable
DROP TABLE `Location`;

-- CreateTable
CREATE TABLE `Pins` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `longitude` DOUBLE NOT NULL,
    `latitude` DOUBLE NOT NULL,
    `userId` INTEGER NOT NULL,

    INDEX `Pins_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pins` ADD CONSTRAINT `Pins_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "codeIntern" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "specification" TEXT NOT NULL,
    "equipSectorId" INTEGER NOT NULL,
    "manufacturerId" INTEGER NOT NULL,
    "trayNumber" TEXT NOT NULL,
    "trayLocation" TEXT NOT NULL,
    "minimumStock" INTEGER NOT NULL,
    "maxStock" INTEGER NOT NULL,
    "currentStock" INTEGER NOT NULL,
    "image" BYTEA,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_equipSectorId_fkey" FOREIGN KEY ("equipSectorId") REFERENCES "EquipSector"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

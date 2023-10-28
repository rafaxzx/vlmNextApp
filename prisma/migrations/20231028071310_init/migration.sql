-- CreateTable
CREATE TABLE "Manufacturer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "logo" BYTEA,

    CONSTRAINT "Manufacturer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EquipSector" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "EquipSector_pkey" PRIMARY KEY ("id")
);

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

-- CreateIndex
CREATE UNIQUE INDEX "Manufacturer_name_key" ON "Manufacturer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "EquipSector_name_key" ON "EquipSector"("name");

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_equipSectorId_fkey" FOREIGN KEY ("equipSectorId") REFERENCES "EquipSector"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

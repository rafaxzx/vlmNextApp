-- CreateTable
CREATE TABLE "EquipSector" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "EquipSector_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EquipSector_name_key" ON "EquipSector"("name");

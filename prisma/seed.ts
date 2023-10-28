import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const kuka = await prisma.manufacturer.upsert({
    where: { name: "Kuka" },
    update: {},
    create: {
      name: "Kuka",
    },
  });

  const manut = await prisma.equipSector.upsert({
    where: { name: "721/4" },
    update: {},
    create: {
      name: "721/4",
    },
  });

  const item = await prisma.item.upsert({
    where: { id: 1 },
    update: {},
    create: {
      codeIntern: "123456789",
      name: "Robo",
      specification: "braço robotico",
      equipSectorId: 1,
      manufacturerId: 1,
      trayNumber: "247",
      trayLocation: "A",
      minimumStock: 1,
      maxStock: 2,
      currentStock: 1,
    },
  });
  console.log({ kuka, manut, item });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

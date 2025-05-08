// prisma/seed.ts
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

async function main() {
  await prisma.company.create({
    data: {
      name: "Trust Chain investai",
      uen: "201803596Z",
      status: "Active",
      incorporationDate: new Date("2025-02-05"),
      headquarters: "8F, Tower 1, Financial Center 88 Prosperity Street, Central Business District Singapore 048888",
      county: "Singapore",
      postalCode: "048888",
      mainActivity: "Investment Opportunity",
      secondaryActivities: "Recovery Process",
      administrator: "Trustchain corporation",
      shareholders: "TRM, NYSE",
      revenue: 38_900_000,
      netProfit: 7_800_000,
      employees: 28,
    }
  })

  console.log("✅ Company seeded")
}

main().finally(() => prisma.$disconnect())

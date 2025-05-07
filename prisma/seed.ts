// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

async function main() {
  await prisma.company.create({
    data: {
      name: "Rapid Finance Credit SRL",
      registrationNumber: "33621284",
      taxId: "RO33621284",
      status: "Active",
      incorporationDate: new Date("2014-06-25"),
      headquarters: "123 Main Street, Bucharest, Romania",
      county: "Bucharest",
      postalCode: "010101",
      mainActivity: "Financial services and credit",
      secondaryActivities: "Investment consulting, Financial brokerage",
      administrator: "John Doe",
      shareholders: "Jane Smith (70%), Alex Brown (30%)",
      revenue: 1_200_000,
      netProfit: 200_000,
      employees: 25,
    }
  })

  console.log("✅ Company seeded")
}

main().finally(() => prisma.$disconnect())

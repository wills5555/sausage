-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "registrationNumber" TEXT NOT NULL,
    "taxId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "incorporationDate" TIMESTAMP(3) NOT NULL,
    "headquarters" TEXT NOT NULL,
    "county" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "mainActivity" TEXT NOT NULL,
    "secondaryActivities" TEXT NOT NULL,
    "administrator" TEXT NOT NULL,
    "shareholders" TEXT NOT NULL,
    "revenue" DOUBLE PRECISION NOT NULL,
    "netProfit" DOUBLE PRECISION NOT NULL,
    "employees" INTEGER NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

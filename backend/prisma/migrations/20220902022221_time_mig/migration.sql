-- CreateTable
CREATE TABLE "time" (
    "id" SERIAL NOT NULL,
    "period" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "time_pkey" PRIMARY KEY ("id")
);

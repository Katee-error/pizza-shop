import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";

export async function GET() {
    const topings = await prisma.toping.findMany();

    return NextResponse.json({ topings });
}
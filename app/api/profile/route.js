import { NextResponse } from "next/server";

export async function GET() {
  const profile = {
    name: "Bunga Anisatul Zahra",
    role: "peserta bootcamp",
    favoriteTech: ["Next.js", "React", "Tailwind CSS"],
  };

  return NextResponse.json(profile);
}
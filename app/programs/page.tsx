"use client";

import NewProgram from "@/components/programs/NewProgram";
import ProgramHero from "@/components/programs/ProgramHero";
import CurrentActiveProgram from "@/components/programs/currentActiveProgram";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2]">
      <ProgramHero />
      {/* <CurrentActiveProgram /> */}
      <NewProgram />
    </main>
  );
}

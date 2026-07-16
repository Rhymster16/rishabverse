"use client";

import { useEffect, useState } from "react";
import BootTerminal from "./BootTerminal";
import BootHero from "./BootHero";

const TOTAL_LINES = 11;

export default function BootSequence() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((previous) => {
        if (previous >= TOTAL_LINES) {
          clearInterval(interval);

          setTimeout(() => {
            setShowHero(true);
          }, 1200);

          return previous;
        }

        return previous + 1;
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  if (showHero) {
    return <BootHero />;
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-6">
      <BootTerminal visibleLines={visibleLines} />
    </section>
  );
}
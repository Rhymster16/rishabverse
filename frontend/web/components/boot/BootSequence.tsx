"use client";

import { useEffect, useState } from "react";
import BootTerminal from "./BootTerminal";

const TOTAL_LINES = 11;

export default function BootSequence() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((previous) => {
        if (previous >= TOTAL_LINES) {
          clearInterval(interval);
          return previous;
        }

        return previous + 1;
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-6">
      <BootTerminal visibleLines={visibleLines} />
    </section>
  );
}
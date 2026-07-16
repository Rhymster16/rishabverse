"use client";

import { TypeAnimation } from "react-type-animation";

export default function HeroRoles() {
  return (
    <div className="mt-16 text-3xl font-semibold text-blue-400">
      <TypeAnimation
        sequence={[
          "Engineer", 1500,
          "Builder", 1500,
          "Researcher", 1500,
          "Leader", 1500,
          "Writer", 1500,
          "Dreamer", 1500,
          "Human", 2500,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </div>
  );
}
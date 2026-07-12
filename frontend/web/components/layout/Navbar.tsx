/**
 * -----------------------------------------------------------------------------
 * File: Navbar.tsx
 * Project: RishabVerse
 * Layer: Layout
 *
 * Purpose:
 * Primary navigation component of the application.
 *
 * Responsibilities:
 * - Display brand identity
 * - Display navigation links
 * - Remain fixed across all pages
 *
 * Future Features:
 * - Theme Switcher
 * - AI Search
 * - Voice Command
 * - Notifications
 * - User Status
 * -----------------------------------------------------------------------------
 */

import Link from "next/link";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <Container>
        <nav className="flex h-16 items-center justify-between">

          {/* Logo */}

          <Link href="/" className="text-xl font-bold tracking-wide">
            {siteConfig.name}
          </Link>

          {/* Navigation */}

          <ul className="hidden md:flex items-center gap-8">

            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-gray-300 transition hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}

          </ul>

        </nav>
      </Container>
    </header>
  );
}
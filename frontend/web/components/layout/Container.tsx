/**
 * -----------------------------------------------------------------------------
 * File: Container.tsx
 * Project: RishabVerse
 * Layer: Layout
 *
 * Purpose:
 * Provides a consistent content wrapper for the entire application.
 *
 * Responsibilities:
 * - Centers page content
 * - Limits maximum content width
 * - Provides responsive horizontal padding
 * - Acts as the base layout wrapper for all pages
 *
 * This component DOES NOT:
 * - Contain business logic
 * - Know which page is being rendered
 * - Fetch data
 * - Handle navigation
 *
 * Author: Rishab Verma
 * -----------------------------------------------------------------------------
 */

import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto
        w-full
        max-w-7xl
        px-6
        sm:px-8
        lg:px-10
        xl:px-12
        ${className}
      `}
    >
      {children}
    </div>
  );
}
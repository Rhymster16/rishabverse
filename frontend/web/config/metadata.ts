import type { Metadata } from "next";
import { siteConfig } from "./site";

export const metadata: Metadata = {
  title: siteConfig.title,

  description: siteConfig.description,

  applicationName: siteConfig.name,

  authors: [
    {
      name: siteConfig.author,
    },
  ],

  creator: siteConfig.author,

  keywords: [
    "Rishab Verma",
    "Portfolio",
    "AI Engineer",
    "Full Stack Developer",
    "Data Analyst",
    "Java",
    "Spring Boot",
    "Next.js",
    "Python",
    "UPSC",
    "EduChanakya",
  ],
};
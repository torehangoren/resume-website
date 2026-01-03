import { defineCollection, z } from "astro:content";

const profile = defineCollection({
  schema: z.object({
    fullName: z.string(),
    headline: z.string(),
    location: z.string(),
    summary: z.array(z.string()),
    languages: z.array(
      z.object({
        name: z.string(),
        level: z.string(),
      })
    ),
    industries: z.array(z.string()),
    sapTraining: z.array(z.string()),
    tech: z.array(z.string()),
  }),
});

const experience = defineCollection({
  schema: z.object({
    company: z.string(),
    role: z.string(),
    location: z.string().optional(),
    start: z.string(), // YYYY-MM
    end: z.string().optional(), // YYYY-MM or "present"
    highlights: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tech: z.array(z.string()).default([]),
    link: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

const talks = defineCollection({
  schema: z.object({
    title: z.string(),
    event: z.string(),
    date: z.string(), // allow "2024" or "YYYY-MM-DD"
    link: z.string().url().optional(),
  }),
});

export const collections = { profile, experience, projects, talks };

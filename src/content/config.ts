import { defineCollection, z } from "astro:content";

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
    date: z.string(), // YYYY-MM-DD
    link: z.string().url().optional(),
  }),
});

export const collections = { experience, projects, talks };

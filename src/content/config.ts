import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    date: z.string(), // ISO
    status: z.enum(["alpha","beta","stable"]).default("alpha"),
    tags: z.array(z.string()).default([]),
    hero: z.string().optional(), // /images/...
    repo: z.string().url().optional(),
    order: z.number().default(0)
  })
});

export const collections = { projects };

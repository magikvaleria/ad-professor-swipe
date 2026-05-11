import { defineCollection, z } from 'astro:content';

const ads = defineCollection({
  type: 'content',
  schema: z.object({
    // Identity
    title: z.string(),
    brand: z.string(),
    agency: z.string().optional(),
    year: z.number().int().min(1900).max(new Date().getFullYear() + 1),
    medium: z.enum([
      'TV',
      'Digital',
      'OOH',
      'Print',
      'Social',
      'Audio',
      'Experiential',
      'Integrated',
    ]),

    // Media
    adUrl: z.string().url().optional(),
    embedUrl: z.string().url().optional(),
    thumbnail: z.string().optional(),

    // Metadata
    publishedAt: z.date(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),

    // The framework — six required fields per entry
    hook: z.string().describe('Exactly what stops the scroll in the first 2 seconds.'),
    insight: z.string().describe('The human truth or tension the ad is built on.'),
    mechanisms: z
      .array(z.string())
      .describe('Named psychological principles, e.g. "loss aversion", "identity signaling".'),
    structure: z
      .string()
      .describe('Narrative shape: problem/solution, transformation, juxtaposition, reveal, etc.'),
    template: z
      .string()
      .describe('Brand-agnostic formula that could be applied to a different product.'),
    appliedExample: z
      .string()
      .describe('The template applied to a different category as a test of generalizability.'),
  }),
});

export const collections = { ads };

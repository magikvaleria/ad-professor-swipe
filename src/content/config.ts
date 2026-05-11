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
    kind: z
      .enum([
        'Great ad',
        'Social media ad',
        'TikTok ad',
        'Great Creator Ad',
        'Ad Professor Original',
      ])
      .default('Great ad')
      .describe('Format tag in The Ad Professor newsletter style.'),

    // Media
    adUrl: z.string().url().optional(),
    embedUrl: z.string().url().optional(),
    thumbnail: z.string().optional(),

    // Metadata
    publishedAt: z.date(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),

    // Ad Professor surface — what shows at the top of every entry
    principle: z
      .string()
      .describe('The named principle in The Ad Professor style, e.g. "The Handbrake Turn", "Reframe The Dismissed Group".'),
    breakdown: z
      .string()
      .describe('2-4 line short-form analysis. Step 1 → Step 2, X=boring/Y=magic, or one aphorism.'),

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

    // Cosmology layer — why this ad, given the current sky
    cosmologyContext: z
      .object({
        window: z.string().describe('e.g. "Spring 2026" — matches synthesis.json window_label.'),
        resonantAspects: z
          .array(z.string())
          .describe('Names of dominant_aspects this ad resonates with.'),
        historicalEcho: z
          .string()
          .optional()
          .describe('Optional: era resonance, e.g. an ad from a previous occurrence of one of the current aspects.'),
        framingNotes: z
          .string()
          .describe('Why this template, in this sky. The cosmological case for the analysis.'),
        feedsAngles: z
          .array(
            z.object({
              persona: z.enum(['Maya', 'Kate', 'Linda', 'Helen']),
              angle: z.string(),
              cosmologyLink: z
                .string()
                .describe('Which cosmological currents this persona × angle pairing meets.'),
            })
          )
          .default([]),
      })
      .optional(),

    // Ad Factory output — one creative per persona per analysis
    creatives: z
      .array(
        z.object({
          trackingName: z
            .string()
            .describe('KEYWORD_creative_audience_v# per Meta Ads Manager convention.'),
          persona: z.enum(['Maya', 'Kate', 'Linda', 'Helen']),
          angle: z.enum([
            'NODRAW',
            'REMEMBER',
            'WONDER',
            'GIRL',
            'FORGOT',
            'ANTIAI',
            'SUNDAY',
            'GASP',
            'ORDER',
            'LINEAGE',
            'FLAT',
            'HEIRLOOM',
            'LASTAWE',
          ]),
          format: z.string().describe('e.g. "Organic-looking static", "2-screen ASMR process".'),
          primaryText: z.string().describe('Meta ad primary text (caption).'),
          headline: z.string().describe('Bold line under the creative.'),
          description: z.string().optional(),
          cta: z
            .enum(['Learn More', 'Sign Up', 'Get Started', 'Shop Now', 'Apply Now'])
            .default('Learn More'),
          image: z.string().optional().describe('Path to creative asset under /public.'),
          videoEmbedUrl: z.string().url().optional(),
          status: z
            .enum(['draft', 'testing', 'scaling', 'killed', 'retargeting'])
            .default('draft'),
          notes: z.string().optional(),
        })
      )
      .default([]),
  }),
});

export const collections = { ads };

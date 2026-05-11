import synthesisRaw from '../data/cosmology.json';

export interface CosmologyAspect {
  name: string;
  last_exact: string;
  meaning: string;
}

export interface CosmologyAngle {
  framing: string;
  examples: string[];
}

export interface CosmologySynthesis {
  generated_at: string;
  window_label: string;
  headline: string;
  dominant_aspects: CosmologyAspect[];
  psychological_state: string[];
  framing_table: { avoid: string; use: string }[];
  ad_angles: CosmologyAngle[];
}

export const cosmology = synthesisRaw as unknown as CosmologySynthesis;

export function aspectSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[–—-]/g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function aspectByName(name: string): CosmologyAspect | undefined {
  const target = aspectSlug(name);
  return cosmology.dominant_aspects.find((a) => aspectSlug(a.name) === target);
}

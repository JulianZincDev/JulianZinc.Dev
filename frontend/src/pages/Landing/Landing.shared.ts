export const sections = ['home', 'projects', 'contact'] as const;
export type Section = typeof sections[number];

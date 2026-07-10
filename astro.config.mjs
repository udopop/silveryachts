import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';

export default defineConfig({
  output: 'server', // Zwingt Astro dazu, Daten bei jedem Klick live zu laden
  integrations: [
    sanity({
      projectId: 'zkzyvpej',
      dataset: 'production',
      useCdn: false, // Wichtig: False lassen, damit es keine 5 Minuten Cache-Verzögerung gibt
      apiVersion: '2026-07-09',
    }),
  ],
});
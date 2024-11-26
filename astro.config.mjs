import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown'
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://astro-article.netlify.app/',
    integrations: [
        tailwind(),
        mdx(), 
        sitemap(),
        partytown({
            config: {
              forward: ["dataLayer.push"],
            },
        }),
    ],
});

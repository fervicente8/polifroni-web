import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import amplify from "astro-aws-amplify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: amplify()
});
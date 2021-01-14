import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "digitalstudio",
  outDir: './dist/static',
  routes: {},
  extraRoutes: [
    '/pricing',
    '/contact-us',
    '/galleries',
    '/galleries/:id/:name',
    '/tags',
    '/blog/:date/:title'
  ]
};

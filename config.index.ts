import { writeFile } from 'fs';

const targetPath = './src/environments/environment.prod.ts';
const envConfigFile = `export const environment = {
  production: true,
  contentful: {
    spaceId: '${process.env.CONTENTFUL_SPACE_ID}',
    accessToken: '${process.env.CONTENTFUL_ACCESS_TOKEN}'
  }
};`;

writeFile(targetPath, envConfigFile, 'utf8', (error) => {
  if (error) {
    return console.log(error);
  }
});

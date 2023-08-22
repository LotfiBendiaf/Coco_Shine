import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const sanityToken = process.env.NEXT_PUBLIC_SANITY_TOKEN;

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: '2023-03-11',
  useCdn: true,
  token: sanityToken,
  ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

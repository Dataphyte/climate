import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'ij8izimr',
  dataset: 'production',
  apiVersion: '2021-10-21',
  token: process.env.SANITY_API_TOKEN,
  useCdn: true,
});

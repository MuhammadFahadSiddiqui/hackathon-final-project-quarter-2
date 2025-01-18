import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: '8vbleuyy',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
});

export default client;

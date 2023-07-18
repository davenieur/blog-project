import dotenv from 'dotenv';
dotenv.config();

import { GraphQLClient } from 'graphql-request';

// CONT NEXT_PUBLIC son visibles en el sitio web, pero no en la terminal
const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const deliveryToken = process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN;
const environment = process.env.NEXT_PUBLIC_CONTENTFUL_NODE_ENV;
const endpoint = `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}`;

const client = new GraphQLClient(endpoint, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${deliveryToken}`
  }
});

export {
  client
};
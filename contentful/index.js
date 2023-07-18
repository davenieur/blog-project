require('dotenv').config();

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const deliveryToken = process.env.CONTENTFUL_DELIVERY_TOKEN;
const previewToken = process.env.CONTENTFUL_PREVIEW_TOKEN;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const environment = process.env.NODE_ENV;

// Build the GraphQL Query
const query = `{
    site(limit: 1) {
      items {
        title
       
      }
    }`;

console.log(query);

const petition = async () => {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${deliveryToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      }
    );
  
    console.log(response);
  };
  
  petition();


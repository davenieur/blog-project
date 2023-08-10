import { client } from "../contentfulApi";

// Obtenemos solo los datos relevantes para los PostCards, se utiliza en los SLUGS para un enrutamiento correcto 
const getPostsSlugs= async () => {


  const postQuery = `query{
    siteCollection {
      items {
        postsCollection(limit: 100) {
          items {
            slug
            altSlug: slug(locale: "en-US")
          }
        }
      }
    }
  }`;

  try {
    const data = await client.request(postQuery);
   
    const { siteCollection: { items } } = data;
    return items[0].postsCollection.items;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
  getPostsSlugs
};

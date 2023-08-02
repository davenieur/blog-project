import { client } from "../contentfulApi";

// Se utiliza en los SLUGS para un enrutamiento correcto 
const getPostsSlugs= async () => {
  
  const postQuery = `query{
    siteCollection {
      items {
        postsCollection(limit: 100) {
          items {
            slugES: slug(locale: "es")
            slugEN: slug(locale: "en-US")
          }
        }
      }
    }
  }`;

  try {
    const data = await client.request(postQuery);
    console.log(data)
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

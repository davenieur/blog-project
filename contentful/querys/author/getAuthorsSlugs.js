import { client } from "../../contentfulApi";

// Obtenemos solo los datos relevantes para la búsqueda por autor, se utiliza en los SLUGS para un enrutamiento correcto 
const getAuthorsSlugs = async (locale = "es", altLocale="en-US") => {
  const siteQuery = `query {
    siteCollection {
      items {
        authorsCollection(limit: 100, locale: "${ locale }") {
          items{
            slug
            altSlug: slug(locale: "${ altLocale }")
          }
        }
      }
    }
  }`;
  
  try {
    const data = await client.request(siteQuery);
    const { siteCollection: { items } } = data;
    return items[0].authorsCollection.items;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
    getAuthorsSlugs
};

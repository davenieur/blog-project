import { client } from "../contentfulApi";

// Obtenemos solo los datos relevantes para los categoryItems, se utiliza en los SLUGS para un enrutamiento correcto 
const getCategories = async () => {
  const siteQuery = `query {
    siteCollection {
      items {
        categoriesCollection(locale: "es") {
          items{
            slug
            altSlug: slug(locale: "en-US")
            name
            altName: name(locale: "en-US")
          }
        }
      }
    }
  }`;

  try {
    const data = await client.request(siteQuery);
    const { siteCollection: { items } } = data;
    return items[0].categoriesCollection.items;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
    getCategories
};

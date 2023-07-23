import { client } from "../contentfulApi";

const getCategoriesSlugs = async () => {
  const siteQuery = `query {
    siteCollection {
      items {
        categoriesCollection{
          items{
            slugES: slug(locale: "es")
            slugEN: slug(locale: "en-US")
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
    getCategoriesSlugs
};

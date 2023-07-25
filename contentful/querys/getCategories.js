import { client } from "../contentfulApi";

const getCategories = async (locale, altLocale) => {
  const siteQuery = `query {
    siteCollection {
      items {
        categoriesCollection(locale: "${locale}") {
          items{
            slug
            altSlug: slug(locale: "${altLocale}")
            name
            altName: name(locale: "${altLocale}")
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

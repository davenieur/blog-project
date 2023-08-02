import { client } from "../contentfulApi";

// Se utiliza para que LanguageToggle tenga el slug en el idioma alterno, además del nombre
const getCategory = async (slug, locale = 'es', altLocale = 'en-US') => {
  const siteQuery = `query {
    siteCollection {
      items {
        categoriesCollection(locale: "${locale}", where: { slug:"${slug}" } ) {
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
    return items[0].categoriesCollection.items[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
    getCategory
};

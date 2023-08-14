import { client } from "../../contentfulApi";

// Se utiliza para que LanguageToggle tenga el slug en el idioma alterno, además del nombre
const getAuthorBySlug = async (slug, locale = 'es', altLocale = 'en-US') => {
  const siteQuery = `query {
    siteCollection {
      items {
        authorsCollection(limit: 1, locale: "${locale}", where: { slug:"${slug}" } ) {
          items{
            slug
            altSlug: slug(locale: "${altLocale}")
            fullName
            photo{
              url
              title
            }
            biography {
              json
            }
          }
        }
      }
    }
  }`;

  

  try {
    const data = await client.request(siteQuery);
    const { siteCollection: { items } } = data;
    return items[0].authorsCollection.items[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
    getAuthorBySlug
};

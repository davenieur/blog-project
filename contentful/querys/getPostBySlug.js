import { client } from "../contentfulApi";

// Obtener todos los datos del post, se utiliza para que LanguageToggle tenga el slug en el otro idioma.
const getPostBySlug= async (slug, locale, altLocale) => {

  
  const postQuery = `query{
    postCollection(locale: "${locale}", where: { slug:"${slug}" } ) {
      items {
        slug
        altSlug: slug(locale: "${altLocale}")
        title
        altTitle: title(locale: "${altLocale}")
        creationDate
        metaKeywords
        altMetaKeywords: metaKeywords(locale: "${altLocale}")
        metaDescription
        altMetaDescription: metaDescription(locale: "${altLocale}")
        featuredImage{
          title
          url
        }
        thumbnail{
          title
          url
        }
        author{
          fullName
          photo{
            title
            url
          }
          slug
        }
        
        readingTime
        category{
          slug
          altSlug: slug(locale: "${ altLocale }")
          name
          altName: name(locale: "${ altLocale }")
        }
      }
    }
  }`;

  try {
    const data = await client.request(postQuery);
    const { postCollection: { items } } = data;
    return items[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
  getPostBySlug
};

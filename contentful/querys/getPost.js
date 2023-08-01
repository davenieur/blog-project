import { client } from "../contentfulApi";

// Obtener todos los datos del post
const getPost= async (locale, altLocale, slug) => {

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
        excerpt
        readingTime
        category{
          slugES: slug(locale: "es")
          slugEN: slug(locale: "en-US")
          nameES: name(locale: "es")
          nameEN: name(locale: "en-US")
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
  getPost
};

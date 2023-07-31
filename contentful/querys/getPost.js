import { client } from "../contentfulApi";

// Obtener todos los datos del post
const getPost= async (slug) => {

  const postQuery = `query{
    postCollection(where: { slug:"${slug}" } ) {
      items {
        titleES: title(locale: "es")
        titleEN: title(locale: "en-US")
        slugES: slug(locale: "es")
        slugEN: slug(locale: "en-US")
        creationDate
        metaKeywordsES: metaKeywords(locale: "es")
        metaKeywordsEN: metaKeywords(locale: "en-US")
        metaDescriptionES: metaDescription(locale: "es")
        metaDescriptionEN: metaDescription(locale: "en-US")
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
          slug
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

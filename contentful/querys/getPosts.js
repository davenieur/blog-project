import { client } from "../contentfulApi";

const getPosts= async (slug) => {

  // Si existe un parámetro agregamos esta cadena al query
  const withSearchParameter = slug ? ` , where: { category: { slug: "${slug}" } } ` : '';

  const postQuery = `query{
    postCollection(limit: 3 ${ withSearchParameter }) {
      items {
        titleES: title(locale: "es")
        titleEN: title(locale: "en-US")
        slugES: slug(locale: "es")
        slugEN: slug(locale: "en-US")
        metaKeywordsES: metaKeywords(locale: "es")
        metaKeywordsEN: metaKeywords(locale: "en-US")
        metaDescriptionES: metaDescription(locale: "es")
        metaDescriptionEN: metaDescription(locale: "en-US")
        excerptES: excerpt(locale: "es")
        excerptEN: excerpt(locale: "en-US")
        creationDate
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
          name
        }
      }
    }
  }`;

  try {
    const data = await client.request(postQuery);
    const { postCollection: { items } } = data;
    return items;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
  getPosts
};

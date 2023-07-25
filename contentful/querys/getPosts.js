import { client } from "../contentfulApi";

const getPosts= async (locale, altLocale) => {
  const postQuery = `query{
    postCollection(limit: 10, locale: "${locale}") {
      items {
        title
        altTitle: title(locale: "${altLocale}")
        slug: slug(locale: "es")
        altSlug: slug(locale: "${altLocale}")
        metaKeywords
        altMetaKeywords: metaKeywords(locale: "${altLocale}")
        metaDescription
        altMetaDescription: metaDescription(locale: "${altLocale}")
        excerpt
        altExcerpt: excerpt(locale: "${altLocale}")
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

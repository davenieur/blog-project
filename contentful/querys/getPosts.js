import { client } from "../contentfulApi";

const getPosts= async () => {
  const postQuery = `query{
    postCollection(limit: 10) {
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

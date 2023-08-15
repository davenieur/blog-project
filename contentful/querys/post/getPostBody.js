import { client } from "../../contentfulApi";

// Obtener el body del post
const getPostBody= async (slug, locale) => {
  const postQuery = `query{
    postCollection(limit: 1, locale: "${locale}", where: { slug:"${slug}" } ) {
      items {
        body{
          json
          links {
            entries {
              inline {
                sys {
                  id
                }
                __typename
                ... on Post {
                  title
                  slug
                  thumbnail{
                    title
                    url
                  }
                  excerpt
                }
                ... on Category {
                  name
                  slug
                }
              }
              block {
                sys {
                  id
                }
                __typename
                ... on Post {
                  title
                  slug
                  thumbnail{
                    title
                    url
                  }
                  excerpt
                }
                ... on Category {
                  name
                  slug
                }
              }
            }
            assets {
              block {
                sys {
                  id
                }
                url
                title
                description
              }
            }
          }
        }
      }
    }
  }`;

  try {
    const data = await client.request(postQuery);
    const { postCollection: { items } } = data;
    return items[0].body;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
  getPostBody
};

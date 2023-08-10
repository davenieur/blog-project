import { client } from "../contentfulApi";

// Obtener el body del post
const getPostBody= async (slug, locale) => {
  const postQuery = `query{
    postCollection(locale: "${locale}", where: { slug:"${slug}" } ) {
      items {
        body{
          json
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
  getPostBody
};

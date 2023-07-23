import { client } from "../contentfulApi";

const getPostsSlugs = async () => {
  const siteQuery = `query {
    siteCollection {
      items {
        postsCollection{
          items{
            slugES: slug(locale: "es")
            slugEN: slug(locale: "en-US")
          }
        }
      }
    }
  }`;

  try {
    const data = await client.request(siteQuery);
    const { siteCollection: { items } } = data;
    return items[0].postsCollection.items;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
    getPostsSlugs
};

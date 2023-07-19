import { client } from "../contentfulApi";

const getSite = async () => {
  const siteQuery = `query {
    siteCollection {
      items {
        header
        title
        footer
      }
    }
  }`;

  try {
    const data = await client.request(siteQuery);
    const { siteCollection: { items } } = data;
    return items[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
  getSite
};

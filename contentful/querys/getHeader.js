import { client } from "../contentfulApi";

const getHeader = async () => {
  const siteQuery = `query {
    siteCollection {
      items {
        header
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
  getHeader
};

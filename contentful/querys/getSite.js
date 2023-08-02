import { client } from "../contentfulApi";

// Obtenemos la información de sitio como el titulo (se puede incluir más cosas)
const getSite = async () => {
  const siteQuery = `query {
    siteCollection {
      items {
        title
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

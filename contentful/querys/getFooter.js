import { client } from "../contentfulApi";

// Se utiliza para obtener el contenido del footer  ( se pueden agregar imagenes, texto o más ) 
const getFooter = async () => {
  const siteQuery = `query {
    siteCollection {
      items {
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
  getFooter
};

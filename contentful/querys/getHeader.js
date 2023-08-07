import { client } from "../contentfulApi";

// Se utiliza para obtener el contenido del Header ( se pueden agregar imagenes, texto o más ) 
const getHeader = async () => {
  const siteQuery = `query {
    siteCollection {
      items {
        header{
          name
          logo{
            url
            title
          }
        }
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

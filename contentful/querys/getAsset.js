import { client } from "../contentfulApi";

// Obtenemos la información del asset para mostrarlo en el body del post
const getAsset = async (id) => {
  const siteQuery = `query {
    
    asset(id: "${ id }") {
        sys {
        id
        }
        title
        description
        file {
        url
        contentType
        fileName
        size
        }
    }
            
  }`;
  
  try {
    const data = await client.request(siteQuery);
    const { siteCollection: { items } } = data;
    return items[0].categoriesCollection.items;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
    getAsset 
};


import { client } from "../../contentfulApi";

// Obtenemos el número total de posts con base a un parametro
const getTotalPosts = async (slug = undefined, parameter = undefined) => {
  const searchParameter = slug ? `, (where: { ${ parameter }: { slug: "${ slug }" } })` : ''

  const postQuery = `query{
    siteCollection {
      items {
        postsCollection ${ searchParameter } {
          items {
            slug
          }
        }
      }
    }
  }`;

  try {
    const data = await client.request(postQuery);
    const { siteCollection: { items } } = data;
    const totalPosts = items[0].postsCollection.items.length;
    return totalPosts;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
  getTotalPosts
};

import { client } from "../contentfulApi";

// Obtenemos solo los datos relevantes para los PostCards, se utiliza en los SLUGS para un enrutamiento correcto 
const getPostsByAuthor= async (slug, offset = 0, limit = 9) => {
  const postQuery = `query{
    siteCollection {
      items {
        postsCollection(limit: ${ limit }, skip: ${ offset }, order: [creationDate_DESC], locale: "es", where: { author: { slug: "${ slug }" } } ) {
          items {
            title
            altTitle: title(locale: "en-US")
            slug
            altSlug: slug(locale: "en-US")
            creationDate
            thumbnail{
              title
              url
            }
            author{
              fullName
              photo{
                title
                url
              }
            }
            readingTime
            category{
              slug
              altSlug: slug(locale: "en-US")
              name
              altName: name(locale: "en-US")
            }
          }
        }
      }
    }
  }`;

  try {
    const data = await client.request(postQuery);
   
    const { siteCollection: { items } } = data;
    return items[0].postsCollection.items;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
  getPostsByAuthor
};

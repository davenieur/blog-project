import { client } from "../contentfulApi";

const getPosts= async () => {
  const postQuery = `query{
    postCollection(limit: 10) {
      items {
          title
          creationDate
          readingTime
          thumbnail {
              title
              url
          }
          author{
            fullName
          }
          slug
          excerpt
      }
    }
  }`;

  try {
    const data = await client.request(postQuery);
    const { postCollection: { items } } = data;
    return items;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
  getPosts
};

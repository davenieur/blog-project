const { client } = require('../contentfulApi');

const postQuery = `postsCollection(limit: 10) {
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
    }
}`;



const pageQuery = `pagesCollection{
    items{
        title
        ${postQuery}
    }
}`

function getSiteItems(siteQuery) {
  return client.request(siteQuery)
    .then(data => {
      const { siteCollection: { items } } = data;
      return items[0];
    })
    .catch(error => {
      console.error(error);
    });
}

getSiteItems(siteQuery)
.then(item => {
  console.log(item);
});
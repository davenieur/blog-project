const postTitle = 'Título predeterminado del sitio';
const description = 'Descripción predeterminada del sitio';
const imageUrl = 'URL de la imagen predeterminada del sitio'; 

export const generateSeoConfig = ( title, metaDescription, thumbnail, url, author ) => ({
  title: title || postTitle,
  description: metaDescription || description,
  openGraph: {
    title: title || postTitle,
    description: metaDescription || description,
    type: "website",
    url: url,
    images: [
      {
        url: thumbnail.url || imageUrl,
        width: 1200,
        height: 630,
        alt: title || postTitle,
      },
    ],
    twitter: {
      card: "Blog Post",
      title: title,
      description: description,
      creator: `@${ author.fullName }`,
      images: [thumbnail.url],
    },
  },
});
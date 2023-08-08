const postTitle = 'Título predeterminado del sitio';
const description = 'Descripción predeterminada del sitio';
const imageUrl = 'URL de la imagen predeterminada del sitio'; // Tamaño recomendado: 1200x630px



export const generateSeoConfig = ( { title, metaDescription, thumbnail } ) => ({
  title: title || postTitle,
  description: metaDescription || description,
  openGraph: {
    title: title || postTitle,
    description: metaDescription || description,
    images: [
      {
        url: thumbnail.url || imageUrl,
        width: 1200,
        height: 630,
        alt: title || postTitle,
      },
    ],
  },
});

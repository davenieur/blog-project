# Proyecto 1: Blog

El propósito del blog es mantener informados y entretener a los miembros del equipo de desarrollo con las tendencias tecnológicas actuales.

## Tabla de Contenidos

- [Proyecto 1: Blog](#proyecto-1-blog)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Paquetes utilizados](#paquetes-utilizados)
  - [Estructura del proyecto](#estructura-del-proyecto)
  - [Instalación y uso](#instalación-y-uso)
    - [Instalación de dependencias en Linux](#instalación-de-dependencias-en-linux)
    - [Instalación de dependencias en Windows](#instalación-de-dependencias-en-windows)
    - [Configuración de variables de entorno](#configuración-de-variables-de-entorno)
  - [Áreas de mejora](#áreas-de-mejora)
  - [Contribución](#contribución)
## Paquetes utilizados
- React
- React DOM
- Chakra UI
- Contentful
- Contentful - Rich Text React Renderer
- Contentful - Rich Text Types
- Emotion
- Disqus React
- Dotenv
- Framer motion
- GraphQL
- GraphQL Request
- Moment
- Next
- Next SEO
- Next Translate
- Next Translate Plugin
- Node Fetch
- Prop Types
- React Icons
- React Scroll To Top

## Estructura del proyecto
- `src/`: Contiene todo el código fuente del proyecto.
  - `author/`: Componentes reutilizables con información de los autores del blog.
  - `categories/`: Componentes reutilizables con información de las categorías del blog.
  - `categories/`: Componentes reutilizables con información de los comentarios de cada post.
  - `pages/`: Archivos que representan las diferentes páginas de la aplicación.
  - `helpers/`: Utilidades y funciones auxiliares.
  - `hooks/`: Hooks personalizados.
  - `layouts/`: Plantillas para cada una de las páginas del blog.
  - `post/`: Componentes reutilizables con información de los posts del blog.
  - `posts/`: Componentes reutilizables para el despliegue de los posts del blog.
  - `styles/`: Estilos de Chakra UI.
  - `ui/`: Componentes reutilizables para la interfaz de usuario.
- `contentful`: Carpeta que contiene la configuración del API de Contentful, así como las peticiones.
  - `querys/`: Contiene las peticiones a la API de Contentful.
- `public/`: Archivos estáticos que se sirven directamente.
- `.env.local.example`: Ejemplo de archivo de variables de entorno.
- `package.json`: Archivo de configuración de npm con las dependencias y comandos del proyecto.
- `i18n.json`: Archivo de configuración idiomas del proyecto.
- `locales`: Contiene los archivos JSON con las traducciones.


## Instalación y uso
A continuación, se muestran los pasos para instalar y ejecutar el proyecto:

1. Clona este repositorio: `git clone https://github.com/L00vely/blog-project.git`
2. Entra al directorio del proyecto: `cd blog-project`
3. Configura las variables de entorno en el archivo `.env.local`.
4. Instala las dependencias: `npm install`
5. Inicia el servidor de desarrollo: `npm start`
6. Abre tu navegador en `http://localhost:3000` para ver la aplicación.
### Instalación de dependencias en Linux
```bash
npm install \
    @chakra-ui/react@^2.7.1 \
    @contentful/rich-text-react-renderer@^15.17.0 \
    @contentful/rich-text-types@^16.2.1 \
    @emotion/react@^11.11.1 \
    contentful@^10.4.0 \
    disqus-react@^1.1.5 \
    dotenv@^16.3.1 \
    framer-motion@^10.15.1 \
    graphql@^16.7.1 \
    graphql-request@^6.1.0 \
    moment@^2.29.4 \
    next@13.4.10 \
    next-seo@^6.1.0 \
    next-translate@^2.5.2 \
    next-translate-plugin@^2.5.2 \
    node-fetch@^3.3.1 \
    prop-types@^15.8.1 \
    react@18.2.0 \
    react-dom@18.2.0 \
    react-icons@^4.10.1 \
    react-scroll-to-top@^3.0.0
```

### Instalación de dependencias en Windows
```bash
npm install ^
    animate.css@^4.1.1 ^
    @chakra-ui/react@^2.7.1 ^
    @contentful/rich-text-react-renderer@^15.17.0 ^
    @contentful/rich-text-types@^16.2.1 ^
    @emotion/react@^11.11.1 ^
    contentful@^10.4.0 ^
    disqus-react@^1.1.5 ^
    dotenv@^16.3.1 ^
    framer-motion@^10.15.1 ^
    graphql@^16.7.1 ^
    graphql-request@^6.1.0 ^
    moment@^2.29.4 ^
    next@13.4.10 ^
    next-seo@^6.1.0 ^
    next-translate@^2.5.2 ^
    next-translate-plugin@^2.5.2 ^
    node-fetch@^3.3.1 ^
    prop-types@^15.8.1 ^
    react@18.2.0 ^
    react-dom@18.2.0 ^
    react-icons@^4.10.1 ^
    react-scroll-to-top@^3.0.0
```
### Configuración de variables de entorno
Crea un archivo en el directorio raíz del proyecto llamado .env.local con las siguientes API Keys


```dotenv
CONTENTFUL_NODE_ENV=<nombre del entorno de desarrollo de Contentful>
CONTENTFUL_SPACE_ID=<id del espacio de Contentful>
CONTENTFUL_DELIVERY_TOKEN=<token de delivery de Contentful>
CONTENTFUL_ACCESS_TOKEN=<token de acceso de Contentful>

NEXT_PUBLIC_CONTENTFUL_NODE_ENV=<nombre del entorno de desarrollo de Contentful>
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=<id del espacio de Contentful>
NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN=<token de delivery de Contentful>
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=<token de acceso de Contentful>
```
## Áreas de mejora
- Simplicar los querys para aplicar el principio DRY.
- Mejorar la traducción del sitio para evitar realizar una petición cada vez que cambie el locale.
- Mejorar el limite por página al momento de cargar el sitio en diferentes dispositivos (debe ser de forma responsiva).
- Mejorar las meta tags para poder crear las Twitter Cards.
- Simplificar los layouts (posts layout, author layout).

## Contribución

Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una nueva rama para tu contribución: `git checkout -b feature/nueva-funcionalidad`
3. Realiza tus cambios y realiza commits: `git commit -m "Añade nueva funcionalidad"`
4. Sube los cambios a tu fork: `git push origin feature/nueva-funcionalidad`
5. Abre una solicitud de extracción en GitHub.

# Proyecto 1: Blog

El propósito del blog es mantener informados y entretener a los miembros del equipo de desarrollo con las tendencias tecnológicas actuales.

## Tabla de Contenidos

- [Proyecto 1: Blog](#proyecto-1-blog)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Paquetes utilizados](#paquetes-utilizados)
  - [Instrucciones de Instalación en Linux](#instrucciones-de-instalación-en-linux)
  - [Instrucciones de Instalación en Windows](#instrucciones-de-instalación-en-windows)
  - [Configuración de variables de entorno](#configuración-de-variables-de-entorno)
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

## Instrucciones de Instalación en Linux
```bash
git clone https://github.com/L00vely/blog-project.git
cd blog-project
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
npm run dev
```

## Instrucciones de Instalación en Windows
```bash
git clone https://github.com/L00vely/blog-project.git
cd blog-project
npm install ^
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
npm run dev
```

## Configuración de variables de entorno
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
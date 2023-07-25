import { useEffect } from 'react';

export default function Home(props) {

  // Redirrecionando a /blog (esto fue reemplazado con redirects en naxt.config.js)
  const redirectToBlog = () => {
    window.location.href = '/blog';
  };

  useEffect(() => {
    redirectToBlog();
  }, []);

  
  return <div>Redirecting...</div>;
  
}

export async function getStaticProps(props){
  const { locale, locales } = props;

  const [ altLocale ] = locales.filter(lang => lang !== locale);

  return {
    props: {
      ...props,
      altLocale
    }
  }
}

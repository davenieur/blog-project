import { useEffect } from 'react';

export default function Home(props) {

  // Redirrecionando a /blog
  const redirectToBlog = () => {
    window.location.href = '/blog';
  };

  useEffect(() => {
    redirectToBlog();
  }, []);

  
  return <div>Redirecting...</div>;
  
}

export async function getStaticProps(props){
  return {
    props: {
      ...props
    }
  }
}

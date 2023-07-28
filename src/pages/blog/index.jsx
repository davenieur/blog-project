import { useState, useEffect, useMemo } from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react'
import { PostsGrid } from '@/posts';
import { getSite } from '../../../contentful/querys';
import { CategoriesGrid } from '@/categories';
import { PostsLayout } from '@/layouts/PostsLayout';


/* /blog */

export default function BlogPage(props) {
 
  return (
    <PostsLayout props={ props }>
      
      {/* LISTA DE POSTS */}
      <PostsGrid {...props}/>


      {/* LISTA DE CATEGORIAS */}
      <CategoriesGrid {...props}/>
    </PostsLayout>
  )
}

export async function getStaticProps(props){
  const { locale, locales } = props;
  const [ altLocale ] = locales.filter(language => language !== locale);

  return {
    props: {
      ...props,
      altLocale
    }
  }
}
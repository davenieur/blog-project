// import Image from 'next/image'

// import { Inter } from 'next/font/google'
// import { getCategoriesSlugs, getPostsSlugs } from '../../../contentful/querys';
// import { extractSlugs } from '@/helpers';






// export default function(props){
   
//     return (
//         <main>
           
          

//         </main> 
//     )
// }

// export async function getStaticPaths(props){
//     console.log("getStaticPaths", props);

//     const postsSlugs = await getPostsSlugs();
//     const categoriesSlugs = await getCategoriesSlugs();
    

//     const [slugsEN, slugsES] = extractSlugs(postsSlugs, categoriesSlugs);

//     const pathEN = slugsEN.map(( item ) => ({
//             params: {
//                 slug: item
//             },
//             locale: 'en-US'
//         })
//     )

//     const pathES = slugsES.map(( item ) => ({
//         params: {
//             slug: item
//         },
//         locale: 'es'
//     })
// )

//     const allPaths = [ ...pathEN, ...pathES ];

//     return {
//         paths: allPaths,
//         fallback:false
//     }
// }   

// export async function getStaticProps(props){
//     const { params: { slug }, locale, locales } = props;
//     console.log("getStaticProps SLUG", slug, locale, locales);
//     // const pageSlug = slug.join("/");
//     // const [page] = pages.filter((item) => {
//     //     const matchingItem = item.fields.slug[languages[locale].model];
//     //     return matchingItem === pageSlug;
//     // });
//     // const [altLocale] = locales.filter((lang) => lang !== locale);
//     // const altSlug = page.fields.slug[languages[altLocale].model];

//     return {
//         props: {
//             slug: '/uwu'
//             // slug: pageSlug,
//             // locale,
//             // locales,
            
//         }
//     }
// }
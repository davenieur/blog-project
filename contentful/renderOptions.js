import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { Heading, Text, Divider, Link, Code, Box } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Image from 'next/image';

// Fuentes
import "@fontsource/mukta";
import "@fontsource/nunito";
import "@fontsource/raleway";
import "@fontsource/open-sans";
import { PostEntry } from '@/post';
import { CategoryItem } from '@/categories';

export const renderOptions = (links = {}, imageHeight) => {
  // Creamos un mapa para los assets
  const assetMap = new Map();

  // Agregamos todos los assets al map
  for (const asset of (links?.assets?.block || [])) {
    assetMap.set(asset.sys.id, asset);
  }

  // Creamos un mapa para las entradas (links a otros posts)
  const entryMap = new Map();

  // Agregamos todos las entradas al map
  for (const entry of (links?.entries?.block || [])) {
    entryMap.set(entry.sys.id, entry);
  }

  // Agregamos todos las entradas al map
  for (const entry of (links?.entries?.inline || [])) {
    entryMap.set(entry.sys.id, entry);
  }

  return {
    // Letras negritas 
    renderMark: {
        [MARKS.BOLD]: (text) => <strong>{text}</strong>,
        [MARKS.CODE]: (text) => <Code children={ text }/>,
        [MARKS.SUBSCRIPT]: (text) => <Text padding="1rem" color="brand.tertiary" fontSize="md">{text}</Text>,
        [MARKS.SUPERSCRIPT]: (text) => <Text padding="1rem" color="brand.tertiary" fontSize="md">{text}</Text>,
    },
    
    renderNode: {

      // Header h2
      [BLOCKS.HEADING_2]: (node, children ) => {
        // Asignamos un ID a cada uno de los headers
        const headerId = node.content[0].value.replace(/\s+/g, '-').toLowerCase();
        return <Heading as="h2" id={ headerId } color="brand.tertiary" fontSize="2xl" fontFamily="mukta">{children}</Heading>
      },

      // Párrafos
      [BLOCKS.PARAGRAPH]: (node, children) => <Text fontSize="md" fontFamily="nunito" lineHeight="2rem" fontWeight="light">{children}</Text>,

      // Header h3
      [BLOCKS.HEADING_3]: (node, children) => <Heading as="h3" color="brand.gray" fontSize="xl" fontFamily="mukta">{children}</Heading>,
      
      // Header h4
      [BLOCKS.HEADING_4]: (node, children) => <Heading as="h4" color="brand.gray" fontSize="lg" fontFamily="mukta">{children}</Heading>,

      // Header h5
      [BLOCKS.HEADING_5]: (node, children) => <Heading as="h5" color="brand.gray" fontSize="md" fontFamily="mukta">{children}</Heading>,

      // Header h6
      [BLOCKS.HEADING_6]: (node, children) => <Heading as="h6" color="brand.gray" fontSize="sm" fontFamily="mukta">{children}</Heading>,

      // HR
      [BLOCKS.HR]: (node, children) => <Divider orientation='horizontal' variant="thick"/>,

      // Citas
      [BLOCKS.QUOTE]: (node, children) => <Box backgroundColor="brand.secondary" color="brand.black" width="fit-content" padding=".5rem 1rem">{children}</Box>,

      // Links
      [INLINES.HYPERLINK]: ({ data }, children) => (
          <Link href={ data.uri } 
            isExternal rel="noopener noreferrer" 
            display="flex" 
            width="fit-content" 
            color="brand.primary" 
            backgroundColor="brand.tertiary" 
            borderRadius="1rem"
            padding="1rem"
            alignItems="center"
            gap="1rem"
            _hover={{ backgroundColor: "brand.secondary", color: "brand.gray"}}
          >
            { children } 
            <ExternalLinkIcon ml='2px' /> 
          </Link>
      ),
      
      // Entrada de un post
      [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        
        const entry = entryMap.get(node.data.target.sys.id);
      
        if (entry.__typename === "Category"){
          return (
            <Box 
              backgroundColor="brand.secondary"
              width="fit-content" 
              padding=".5rem 1rem" 
              borderRadius="1rem"
              _hover={{ backgroundColor: "brand.tertiary ", color: "brand.primary", transition: ".25s"}}
            >
              <CategoryItem { ...entry } />
            </Box>
          );
        } else if (entry.__typename === "Post"){
          return (
            <Link 
              display="flex"
              href={`/blog/${ entry.slug }`} 
              width= "100%" 
              color="brand.gray" 
              backgroundColor="brand.primary" 
              borderRadius="1rem"
              alignItems="center"
              gap="1rem"
              flexDirection="column"
  
              _hover={{ backgroundColor: "brand.tertiary", color: "brand.primary"}}
            >  

              <Box position="relative" width= "100%" height= { imageHeight }>
                <Image
                    src={ entry?.thumbnail.url }
                    alt={ entry?.thumbnail.title }
                    objectFit="cover"
                    layout="fill"
                />
              </Box>  

              { entry.title }
            </Link>
  
          );
        }
      },

      // Link a otro post (formato de card)
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        const entry = entryMap.get(node.data.target.sys.id);
        return <PostEntry { ...entry }/>;
      },
      
      // Multimedia
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        const asset = assetMap.get(node.data.target.sys.id);

        // Videos
        if( asset.url.endsWith('mp4')){
          return(
            <iframe
              src={ asset.url }
              title={ asset.title }
              width="fit-content"
              height="100%"
              allowFullScreen={true}
            />
          )
        } else {
          
          // Imagenes
          return (
            <Box position="relative" width= "100%" height=  { imageHeight }>
              <Image
                  src={ asset?.url }
                  alt={ asset?.title }
                  objectFit="cover"
                  layout="fill"
              />
            </Box>  
         
          );
        }
      }
    }
  }
}



 

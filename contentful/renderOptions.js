import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { Heading, Text, Divider,Link, ListItem, OrderedList, UnorderedList, Code } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Image from 'next/image';

// Fuentes
import "@fontsource/mukta";
import "@fontsource/nunito";
import "@fontsource/raleway";
import "@fontsource/open-sans";

export const renderOptions = {
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
      [BLOCKS.PARAGRAPH]: (node, children) => <Text fontSize="md" fontFamily="nunito" lineHeight="2rem">{children}</Text>,

      // Header h3
      [BLOCKS.HEADING_3]: (node, children) => <Heading as="h3" color="brand.gray" fontSize="xl" fontFamily="mukta">{children}</Heading>,
      
      // Header h4
      [BLOCKS.HEADING_4]: (node, children) => <Heading as="h4" color="brand.gray" fontSize="lg" fontFamily="mukta">{children}</Heading>,

      // Header h5
      [BLOCKS.HEADING_5]: (node, children) => <Heading as="h5" color="brand.gray" fontSize="md" fontFamily="mukta">{children}</Heading>,

      // Header h6
      [BLOCKS.HEADING_6]: (node, children) => <Heading as="h6" color="brand.gray" fontSize="sm" fontFamily="mukta">{children}</Heading>,

      // Unordered list
      [BLOCKS.OL_LIST]: (node, children) => <OrderedList spacing={10} fontSize="sm" fontFamily="mukta">{children}</OrderedList>,

      // Ordered list
      [BLOCKS.UL_LIST]: (node, children) => <UnorderedList spacing={10} fontSize="sm" fontFamily="mukta">{children}</UnorderedList>,

      // List Item
      [BLOCKS.LIST_ITEM]: (node, children) => <ListItem fontSize="sm" fontFamily="mukta">{children}</ListItem>,

      // HR
      [BLOCKS.HR]: (node, children) => <Divider orientation='horizontal' variant="thick"/>,

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

      [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        // target the contentType of the EMBEDDED_ENTRY to display as you need
        if (node.data.target.sys.contentType.sys.id === "blogPost") {
          return (
            <Link href={`/blog/${node.data.target.fields.slug}`}>            
              {node.data.target.fields.title}
            </Link>
          );
        }
      },

      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        // target the contentType of the EMBEDDED_ENTRY to display as you need
        if (node.data.target.sys.contentType.sys.id === "codeBlock") {
          return (
            <pre>
              <code>{node.data.target.fields.code}</code>
            </pre>
          );
        }
  
        if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
          return (
            <iframe
              src={node.data.target.fields.embedUrl}
              height="100%"
              width="100%"
              frameBorder="0"
              scrolling="no"
              title={node.data.target.fields.title}
              allowFullScreen={true}
            />
          );
        }
      },
      
      // Assets dentro de los posts
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {

        return (
          <h2>xd</h2>
          // <img
          //   src={`https://UWU`}
          //   height={node.data.target.fields.file.details.image.height}
          //   width={node.data.target.fields.file.details.image.width}
          //   alt={node.data.target.fields.description}
          // />
        );
      },
    },
    
  };

import { Card, CardHeader, CardBody, useBreakpointValue,Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import PropTypes from 'prop-types';
import "@fontsource/mukta";

export const PostEntry = (props) => {
    const { slug, thumbnail, excerpt, title } = props;
    
    const flexDirection = useBreakpointValue({ base: "column", md: "row", lg: "row", xl: "row"});

    const gridTemplateAreas = useBreakpointValue({
      base: `
          "header"
          "body"
      `,
      md: `
        "header"
        "body"
      `,
      lg: `
        "header"
        "body"
      `,
      xl: `
          "header body"
          "header body"
      `
  });

  const gridTemplateColumns = useBreakpointValue({ base: "100%", md: "100%", lg: "100%", xl: ".7fr .5fr"})

  return (
    <Card 
      gridTemplateAreas={ gridTemplateAreas }
      gridTemplateColumns= { gridTemplateColumns }
    > 
      <CardHeader 
        gridArea="header"
        backgroundColor="brand.secondary" 
        color="brand.primary" 
        display="flex" 
        flexDirection= { flexDirection }
        alignItems="center" 
        gap="1rem"
      > 
        <Link href={`/blog/${ slug }`}>
          <Box position="relative" width="100%" >
            <Image
                src={ thumbnail.url }
                alt={ thumbnail.title }
                width="200"
                height="200"
            />
          </Box>
        </Link>
        <Text>
          { title }
        </Text>
      </CardHeader>
      <CardBody fontWeight="light" gridArea="body"> { excerpt }</CardBody>
    </Card>
      
  );
}

PostEntry.propTypes = {
  slug: PropTypes.string.isRequired,
  thumbnail: PropTypes.object.isRequired,
  excerpt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
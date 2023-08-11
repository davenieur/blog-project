import { Link, Card, CardHeader, Heading, CardBody } from "@chakra-ui/react";
import Image from "next/image";
import PropTypes from 'prop-types';
import "@fontsource/mukta";

export const PostEntry = (props) => {
    const { slug, thumbnail, excerpt, title } = props;

    return (
            
        <Link href={`/blog/${ slug }`} textDecoration="none" width="35rem" fontFamily="mukta">   
          <Card> 
            <CardHeader backgroundColor="brand.secondary" color="brand.primary" display="flex" flexDirection="row" alignItems="center" gap="2rem"> 
              <Image
                  src={ thumbnail.url }
                  alt={ thumbnail.title }
                  width="200"
                  height="200"
              />
              <Heading as="h3" fontSize="xl" fontFamily="mukta"> 
                { title } 
              </Heading>  
            </CardHeader>
            <CardBody fontWeight="light"> {excerpt }</CardBody>
          </Card>
        </Link>
    );
}

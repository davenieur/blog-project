import { Card, CardHeader, Heading, CardBody } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import PropTypes from 'prop-types';
import "@fontsource/mukta";

export const PostEntry = (props) => {
    const { slug, thumbnail, excerpt, title } = props;

    return (
      <Card> 
        <CardHeader backgroundColor="brand.secondary" color="brand.primary" display="flex" flexDirection="row" alignItems="center" gap="2rem"> 
          <Link href={`/blog/${ slug }`}>
            <Image
                src={ thumbnail.url }
                alt={ thumbnail.title }
                width="200"
                height="200"
            />
          </Link>
          <Link href={`/blog/${ slug }`}>
            { title }
          </Link>

        </CardHeader>
        <CardBody fontWeight="light"> { excerpt }</CardBody>
      </Card>
        
    );
}

PostEntry.propTypes = {
  slug: PropTypes.string.isRequired,
  thumbnail: PropTypes.object.isRequired,
  excerpt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
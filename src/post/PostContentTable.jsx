import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { Divider, Flex } from "@chakra-ui/react";
import { AiFillCaretRight } from 'react-icons/ai'

export const PostContentTable = (props) => {
    const { body: { json: { content }}, locale } = props;
    const contentTable = content.filter(content => content.nodeType === 'heading-2');

    // Traducir el label de la tabla de contenidos
    const { t } = useTranslation('common')
    const contentLabel = t('content');


    return (
        <Flex  gridArea="postContentTable" direction="column" gap="2rem" padding="2rem">
            <Flex direction="row" align="center" fontSize="lg" gap=".5rem">
                <AiFillCaretRight size="1.5rem" color="#5F00BA"/> 
                { contentLabel }
            </Flex>

           

            { contentTable.map( content => {
                return(
                    <Flex direction="column" gap="1rem" key={ content.content[0].value } width="70%">
                        <Link href={"/blog"} locale={ locale }  >
                            { content.content[0].value }
                        </Link>

                        <Divider orientation='horizontal' variant="thick"/>

                    </Flex>
                    
                )
                
            }) }

        </Flex>
        
    )
}

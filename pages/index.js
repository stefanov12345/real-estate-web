// import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Link from "next/link"
import {Flex,Box, Text,Button} from "@chakra-ui/react";

const Banner = ({purpose, title1, tittle2,desc1, desc2, buttonText, linkName, imageUrl}) => (
 <Flex flexWrap="wrap" justifyContent="center" alignItems="center"
 m="10">
  {/* <Image src={imageUrl} width={500} height={300} alt="banner"/> */}
  <Box>
    <Text color="gray.500" fontSize="sm" fontweight="medium">{purpose}</Text>
    <Text fontSize="3x1" fontweight='bold'> {title1}<br/>{tittle2}</Text>
    <Text fontSize="lg" paddingTop='3' color="gray.700">{desc1} <br />{desc2}</Text>
    <Button fontSize="x1" bg="blue.300" color='white'> 
    <link href={linkName}>{buttonText}</link>
    </Button>
  </Box>

</Flex>
)


export default function Home() {
  return (
    <div>
      <h1>hello world</h1>
      <Banner
        purpose='RENT A HOME'
        title1='Rental homes for '
        tittle2='Everyone'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        //  buttonText='Explore renting'
        // falla en el button
        // linkName='/search?purpose=for-rent'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
        //falla en url
      />
      {/* <Banner
        purpose='BUY A HOME'
        title1='Find, Buy & own You '
        tittle2='Dream Home'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
         buttonText='Explore renting'
        // falla en el button
        linkName='/search?purpose=for-sale'
        // imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
        //falla en url
      /> */}
      
    </div>
  );
}

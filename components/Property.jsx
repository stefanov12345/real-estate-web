import link from 'next/link';
import Images from 'next/images';
import {Box,Flex,Text,Avatar} from '@chackra-ui/react';
import {Fabed,FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVersified} from 'react-icons/goverified';
// import {GoVersified} from 'react-icons/go';
import millify from 'millify';

const Property = ({property:{coverPhoto, price, rentFrequency,rooms, title, baths, area, agency, isVerified, externalId}}) => (
    <link href = {`/property/${externalId}`} passHref>
{title}
    </link>
)

export default Property ;
import React from 'react';
import fBanner from 'assets/images/fbanner.png';
import { Center, Flex, Image } from '@chakra-ui/react';

function Banner() {
  return (
    <Flex justify="center" align="center" height="100%" bgColor="mainYellow.light">
      <Center>
        <Image src={fBanner} alt="fbanner" />
      </Center>
    </Flex>
  );
}

export default Banner;

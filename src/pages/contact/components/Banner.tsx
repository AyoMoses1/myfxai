import React from 'react';
import fBanner from 'assets/images/fbanner.png';
import { Box, Center, Flex, Image } from '@chakra-ui/react';
import styled from 'styled-components';

function Banner() {
  return (
    <StyledBox height="100%" bgColor="mainYellow.light">
      <Flex justify="center" align="center" height="100%">
        <Center>
          <Image src={fBanner} alt="fbanner" />
        </Center>
      </Flex>
    </StyledBox>
  );
}

export default Banner;

const StyledBox = styled(Box)`
  border: 1px solid;
  border-image: linear-gradient(to top, #ffc300 0%, rgba(0, 0, 0, 0) 80.03%);
  border-image-slice: 1;
  border-image-width: 1px;
  border-image-outset: 0;
  border-image-repeat: stretch;
`;

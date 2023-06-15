import React from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
  useColorMode,
} from '@chakra-ui/react';
import styled from 'styled-components';

interface CustomCardProps {
  title: string;
  content: string;
  image: string | Array<string>;
  bgColor: string;
  float: boolean;
  even: boolean;
  border: string;
}

const styleEven = {
  display: 'flex',
  textAlign: 'right',
  justifyContent: 'flex-end',
  maxWidth: '70%',
  marginLeft: 'auto',
};

const FeatureCard = ({
  title,
  content,
  image,
  bgColor,
  float,
  even,
  border,
}: CustomCardProps) => {
  const { colorMode } = useColorMode();


  return (
    <StyledBox
      bg={colorMode === 'dark' ? `${bgColor}.dark` : `${bgColor}.light`}
      color={border}
      borderRight={float}
      variant="feature"
      isFloat={float}
      p={12}
      marginBottom={10}
      maxWidth="60%"
      marginLeft={float ? 'auto' : ''}
    >
      <Heading variant="secondary" marginBottom={4} sx={even ? {} : styleEven}>
        {title}
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem gridColumn="span 2" order={even ? 1 : 2}>
          <Text variant="cardText">{content}</Text>
        </GridItem>
        <GridItem order={even ? 2 : 1}>
          {typeof image === 'string' ? (
            <Image src={image} />
          ) : (
            <Grid templateColumns="repeat(2, 1fr)" gap={2}>
              {image.map((item, idx) => {
                return (
                  <GridItem key={idx}>
                    <Image src={item} />
                  </GridItem>
                );
              })}
            </Grid>
          )}
        </GridItem>
      </Grid>
    </StyledBox>
  );
};

export default FeatureCard;


 const StyledBox = styled(Box)`
  border-radius: 6.81px;
  background-color: #fffdf2;
  border: 1.49px solid;
  border-image: linear-gradient(
    ${(props) => props.borderRight ? "to left": "to right"},
    ${(props) => props.color} 28.27%,
    rgba(255, 255, 255, 0) 100%
  );
  border-image-slice: 1;
  border-image-width: 1px;
  border-image-outset: 0;
  border-image-repeat: stretch;
`;


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
}: CustomCardProps) => {
  const { colorMode } = useColorMode();

  return (
    <StyledBox
      bg={colorMode === 'dark' ? `${bgColor}.dark` : `${bgColor}.light`}
      variant="feature"
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
              {image.map((item) => {
                return (
                  <GridItem>
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
  box-shadow: ${(props) => props.bgColor} 1.45px 1.45px 1.4px;
`;

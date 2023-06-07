import React from 'react';
import { Flex, Box, Heading, Text, Image, Progress } from '@chakra-ui/react';

interface CustomCardProps {
  title: string;
  allias: string;
  symbol: string;
  price: number;
  percent: number;
  bgColor: string;
}

const Card = ({ title, allias, symbol, price, percent, bgColor }: CustomCardProps) => {
  return (
    <Box bg={bgColor} px={5} py={4}>
      <Flex direction="row" align="center" marginBottom={4}>
        <Image src={symbol} alt={title} marginRight={2}/>
        <Box>
          <Heading variant="cardHeader">{title}</Heading>
          <Text>{allias}</Text>
        </Box>
      </Flex>
      <Box>
        <Heading variant="cardHeader" sx={{fontSize: "21px"}}>${price}</Heading>
        <Progress value={percent} my={3}/>
      </Box>
    </Box>
  );
};

export default Card;

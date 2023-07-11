import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { cardsInfo } from '../helpers';
import Card from './Card';

const Carousel = () => {
  const cardElements = cardsInfo.map((info, idx) => {
    return (
      <GridItem marginBottom="200px" key={idx}>
        <Card
          title={info.title}
          allias={info.allias}
          symbol={info.symbol}
          price={info.price}
          percent={info.percentage}
          bgColor ={info.bgColor}
        />
      </GridItem>
    );
  });
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      {cardElements}
    </Grid>
  );
};

export default Carousel;

import { Grid, GridItem, Heading, Box } from '@chakra-ui/react';
import React from 'react';
import { reviewCardsInfo } from '../helpers';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  const reviewElements = reviewCardsInfo.map((info, idx) => {
    return (
      <GridItem key={idx}>
        <ReviewCard
          title={info.title}
          comment={info.comment}
          avatar={info.avatar}
          name={info.name}
        />
      </GridItem>
    );
  });
  return (
    <Box my={20}>
      <Heading variant="tertiary" marginBottom={20} textAlign="center">
        What Our Traders say about us
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>{reviewElements}</Grid>
    </Box>
  );
};

export default Reviews;

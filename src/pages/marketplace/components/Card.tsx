import React from 'react';
import styled from 'styled-components';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';

interface Props {
  item: {
    name: string;
    value: number;
  };
}

const CardComponent = ({ item }: Props) => {
  return (
    <Card maxW="sm">
      <StyledCardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
        />
        <Stack mt="6" spacing="3" alignItems="center">
          <Text variant="cardText">{item.name}</Text>
          <Heading variant="cardHeader">{`$${item.value}`}</Heading>
        </Stack>
        <Button variant="noBg" width="100%" mt={10}>
          Add to Cart
        </Button>
      </StyledCardBody>
    </Card>
  );
};

export default CardComponent;

const StyledCardBody = styled(CardBody)`
  &:hover {
    button {
      background: #003566;
      color: #fff;
      font-weight: 600;
      border-radius: 2px;
    }
  }
`;

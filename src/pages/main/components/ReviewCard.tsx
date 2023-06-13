import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import styled from 'styled-components';
import { useColorMode } from '@chakra-ui/react';

interface CustomCardProps {
  title: string;
  comment: string;
  name: string;
  avatar: string;
}

const ReviewCard = ({ title, comment, avatar, name }: CustomCardProps) => {
  const { colorMode } = useColorMode();
  return (
    <StyledBox bg={`bgGrey.${colorMode === 'dark' ? 'dark' : 'light'}`}>
      <Text variant="reviewText">{comment}</Text>
      <Flex justifyContent="center" my={6}>
        <img src={avatar} alt={name} />
        <Box flex="1" ml={4}>
          <Name>{name}</Name>
          <Title>{title}</Title>
        </Box>
      </Flex>
    </StyledBox>
  );
};

export default ReviewCard;

const StyledBox = styled(Box)`
  border-radius: 8px;
  padding: 40px 36px;
  text-align: 'center';
`;

const Name = styled(Text)`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #101828;
`;

const Title = styled(Text)`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #667085;
`;

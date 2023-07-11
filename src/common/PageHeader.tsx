import React from 'react';
import { Avatar, Box, Flex, Text, Icon, VStack } from '@chakra-ui/react';
import { FiBell, FiChevronDown } from 'react-icons/fi';
import { QuestionOutlineIcon } from '@chakra-ui/icons';

const PageHeader = () => {
  return (
    <Box
      p={4}
      mb={6}
      bg="white"
      borderRadius="md"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack alignItems="start">
        <Text variant="smallMuted">
          <Icon as={QuestionOutlineIcon} mr={2} />
          Unverified
        </Text>
        <Text variant="nav" fontWeight="500">
          Hello John
        </Text>
      </VStack>
      <Flex alignItems="center" justifyContent="space-between">
        <Icon as={FiBell} boxSize={6} mr={2} />
        <Avatar
          size="sm"
          name="User Avatar"
          src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600"
          mr={2}
        />
        <Icon as={FiChevronDown} boxSize={6} />
      </Flex>
    </Box>
  );
};

export default PageHeader;

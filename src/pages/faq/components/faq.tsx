import { useState } from 'react';
import {
  Box,
  Button,
  Collapse,
  VStack,
  Center,
  Text,
  Icon,
  Flex,
  Heading,
  Divider,
} from '@chakra-ui/react';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import { faqData } from './../../main/helpers';
import styled from 'styled-components';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleQuestionClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <Box width="768px" mx="auto" my={9}>
      <Box marginBottom={16}>
        <Heading variant="tertiary" textAlign="center" my={5}>
          Frequently asked questions
        </Heading>
        <HeaderText>
          Everything you need to know about the product and billing.
        </HeaderText>
      </Box>
      <Center>
        <VStack align="center" spacing={4}>
          {faqData.map((faq, index) => (
            <Box key={index} w="100%" marginBottom={6}>
              <Flex
                w="768px"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text variant="faqQuestion"> {faq.question}</Text>
                <Button
                  variant="link"
                  onClick={() => handleQuestionClick(index)}
                  p={0}
                  color="purple"
                  leftIcon={
                    index === activeIndex ? (
                      <Icon as={FiMinusCircle} boxSize={6} />
                    ) : (
                      <Icon as={FiPlusCircle} boxSize={6} />
                    )
                  }
                />
              </Flex>
              <Collapse in={index === activeIndex}>
                <Box mt={2}>
                  <Text variant="faqAnswer"> {faq.answer}</Text>
                </Box>
              </Collapse>
              {index !== faqData.length - 1 && (
                <Divider
                  bgGradient="linear-gradient(89.99deg, #8C8C8C 8.35%, rgba(234, 236, 240, 0) 92.12%)"
                  height="1px"
                  borderColor="transparent"
                  orientation="horizontal"
                  marginTop={8}
                />
              )}
            </Box>
          ))}
        </VStack>
      </Center>
    </Box>
  );
}

export default FAQ;

const HeaderText = styled(Text)`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #667085;
`;

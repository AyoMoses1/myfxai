import React from 'react';
import {
  Container,
  Heading,
  Text,
  Flex,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Checkbox,
  Image,
  HStack,
  ButtonGroup,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import styled from 'styled-components';
import google from 'assets/icons/google.png';
import generateInputs from './DynamicForm';
import { InputObj } from 'types';

function FormContainer({
  inputObj,
  title,
  caption,
  buttons,
}: {
  inputObj: InputObj[];
  title: string;
  caption?: string;
  buttons?: { name: string; onClick: () => void; size?: string }[];
  onChange?: (name: string, value: string | Record<string, Date>) => void;
}) {
  return (
    <StyledContainer px={10} py={4} w="518px">
      <Box>
        <Box py={4}>
          <Heading variant="formHeader">{title}</Heading>
          <Text variant="quaternary" color="blue2">
            {caption}
          </Text>
        </Box>
        {inputObj.map((input) => (
          <Box key={input.name}>
            {generateInputs({
              ...input,
            })}
          </Box>
        ))}
        <HStack spacing={4} justify="end">
          {buttons?.map((button) => (
            <Button variant="primary" size={button?.size ?? 'sm'} px={8} mt={8}>
              {button.name}
            </Button>
          ))}
        </HStack>
      </Box>
    </StyledContainer>
  );
}

export default FormContainer;

const StyledForm = styled('form')`
  margin-top: 42px;
`;

const StyledContainer = styled(Container)`
  box-shadow: 2px 8px 26px 2px rgba(0, 0, 0, 0.08);
  width: 400px;
  border: 1.49px solid;
  border-image-slice: 1;
  border-image-width: 1px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image: linear-gradient(
      to right,
      #aed8ff 28.27%,
      rgba(128, 128, 128, 0.5) 100%
    )
    1;
`;

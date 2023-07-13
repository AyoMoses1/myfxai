import { ReactElement, useEffect } from 'react';
import {
  Flex,
  Button,
  Box,
  FormLabel,
  Heading,
  VStack,
  Divider,
} from '@chakra-ui/react';
import generateInputs from './DynamicForm';
import underscore from 'underscore';
import { Info } from './Info';

const TableTop = ({
  inputObj,
  buttons,
  onChange,
  title,
  info,
}: {
  inputObj: InputObj[];
  buttons?: {
    name: string;
    icon: ReactElement;
    onClick: () => void;
    variant?: string;
  }[];
  onChange: (name: string, value: string | Record<string, Date>) => void;
  title: string;
  info?: string;
}) => {
  const debouncedOnChange = underscore.debounce(onChange, 1000);

  useEffect(() => {
    return () => {
      debouncedOnChange.cancel();
    };
  }, [debouncedOnChange]);

  const onClick = (buttonName: string) => {
    buttons?.find((button) => button.name === buttonName)?.onClick();
  };

  return (
    <Box pr={12}>
      {' '}
      {inputObj.map((input) => (
        <Box
          key={input.name}
          mr={2}
          mb={8}
          flexBasis={`${
            inputObj.length > 3 ? '24' : 100 / inputObj.length - 2
          }%`}
        >
          {generateInputs({
            ...input,
            onChange: (value: any) => {
              if (value?.target) {
                return debouncedOnChange(input?.name, value.target.value);
              } else {
                return debouncedOnChange(input?.name, value);
              }
            },
          })}
        </Box>
      ))}
      <Flex mb={2} mt={4} justifyContent="space-between">
        <Heading variant="tableHeading">{title}</Heading>
        <Box display="flex" gap={4}>
          {buttons?.map((button) => (
            <Box key={button.name}>
              <Button
                variant={button.variant ?? 'outline'}
                onClick={() => onClick(button.name)}
                leftIcon={button.icon}
                borderColor="#E5E9EB"
                color={button.variant ? "white": "#252C32"}
                size="sm"
              >
                {button.name}
              </Button>
            </Box>
          ))}
        </Box>
      </Flex>
      <Info>{info}</Info>
    </Box>
  );
};

export default TableTop;

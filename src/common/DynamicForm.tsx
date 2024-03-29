import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Select,
  FormHelperText,
  Container,
  InputRightElement,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import DateRangePicker from './DateRange';
import styled from 'styled-components';
import { PhoneIcon } from '@chakra-ui/icons';

const generateInputs = (inputObj: InputObj) => {
  if (
    inputObj.type === 'email' ||
    inputObj.type === 'text' ||
    inputObj.type === 'phone' ||
    inputObj.type === 'number' ||
    inputObj.type === 'date'
  ) {
    return (
      <FormControl isInvalid={inputObj.isInvalid} mb={4} key={inputObj.name}>
        <FormLabel htmlFor={inputObj.name} mb={0} variant="dashboardFormLabel">
          {inputObj.label}
        </FormLabel>
        <InputGroup width={inputObj.width ?? inputObj.width}>
          <Input
            id={inputObj.name}
            type={inputObj.type}
            {...inputObj.register}
            size={inputObj.size ?? 'md'}
            placeholder={inputObj?.placeholder}
            onChange={inputObj?.onChange}
            defaultValue={inputObj?.defaultValue}
            disabled={inputObj?.disabled}
            key={inputObj.type}
            variant={inputObj.variant}
          />
          <InputRightElement>{inputObj.icon}</InputRightElement>
        </InputGroup>
        {inputObj.error && (
          <FormErrorMessage>{inputObj.error.message}</FormErrorMessage>
        )}
        {inputObj.helperMessage && (
          <FormHelperText>{inputObj.helperMessage}</FormHelperText>
        )}
      </FormControl>
    );
  } else if (inputObj.type === 'select') {
    return (
      <FormControl isInvalid={inputObj.isInvalid} mb={4} key={inputObj.name}>
        <FormLabel mb={0} htmlFor={inputObj.name}>
          {inputObj.label}
        </FormLabel>
        <Select
          id={inputObj.name}
          size={inputObj.size ?? 'md'}
          {...inputObj.register}
          focusBorderColor="primary"
          onChange={inputObj?.onChange}
          disabled={inputObj?.disabled}
          defaultValue={inputObj?.defaultValue}
        >
          {inputObj?.options?.map((item) => {
            return (
              <option value={item.value} key={item.name}>
                {item.name}
              </option>
            );
          })}
        </Select>
        {inputObj.error && (
          <FormErrorMessage>{inputObj.error.message}</FormErrorMessage>
        )}
      </FormControl>
    );
  } else if (inputObj.type === 'dateRange') {
    return (
      <DateRangePicker
        onChange={(dateRange) => {
          if (inputObj.onChange) {
            inputObj?.onChange(dateRange);
          }
        }}
      />
    );
  }
};

export default generateInputs;

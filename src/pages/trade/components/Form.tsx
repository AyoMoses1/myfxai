import { Button } from '@chakra-ui/react';
import FormContainer from 'common/FormContainer';
import React, { useMemo } from 'react';

const Form = () => {
  const tableInput: InputObj[] = useMemo(
    () => [
      {
        name: 'name',
        label: 'Account Name',
        placeholder: 'Enter your account name',
        type: 'text',
      },
      {
        name: 'id',
        label: 'Account ID',
        placeholder: 'Enter your MT4/MT5 trading account ID',
        type: 'text',
      },
      {
        name: 'password',
        label: 'Password',
        placeholder: 'Enter your MT4/MT5 trading account password',
        type: 'text',
      },
      {
        name: 'select',
        label: '',
        placeholder: 'select',
        type: 'select',
        options: ['Male', 'Female', 'Others'].map((item) => ({
          value: item.toUpperCase(),
          name: item,
        })),
      },
      {
        name: 'select',
        label: '',
        placeholder: 'select',
        type: 'select',
        options: ['Male', 'Female', 'Others'].map((item) => ({
          value: item.toUpperCase(),
          name: item,
        })),
      },
    ],
    []
  );
  const handleClick =() => {

  }
  return (
    <FormContainer
      title="Add Trading account"
      inputObj={tableInput}
      buttons={[{
        name: "Connect AI",
        onClick: handleClick,
        size:'md',
      }]}
    />
  );
};

export default Form;

// @flow
import { Divider, Text } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};
export const Info = ({ children }: Props) => {
  return (
    <>
      <Text variant="tableCaption">{children}</Text> 
    </>
  );
};

import React from 'react';
import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Grid,
  GridItem,
  Flex,
} from '@chakra-ui/react';
import { passwordFormData } from '../data';

const PasswordSettings = () => {
  return (
    <Box maxW="40vw">
      <Heading variant="settingsHeading" mt={8} mb={2}>
        Password
      </Heading>
      <Text variant="tableCaption" color="textDark">
        Reset your password{' '}
      </Text>
      <Box mt={12}>
        <form>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            {passwordFormData.map((item) => (
              <>
                <GridItem mb={8}>
                  <FormControl>
                    <FormLabel variant="dashboardFormLabel">
                      {item.label}
                    </FormLabel>
                  </FormControl>
                </GridItem>
                <GridItem mb={8}>
                  <FormControl>
                    <Input value={item.value} type="password" />
                  </FormControl>
                </GridItem>
              </>
            ))}
            <GridItem colSpan={2}>
              <Flex justifyContent="end">
                <Button variant="disabled">Update</Button>
              </Flex>
            </GridItem>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default PasswordSettings;

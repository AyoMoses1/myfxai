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
import { formData } from '../data';

const ProfileSettings = () => {
  return (
    <Box maxW="40vw">
      <Heading variant="settingsHeading" mt={8} mb={2}>
        Profile
      </Heading>
      <Text variant="tableCaption" color="textDark">
        Setup or reset your profile
      </Text>
      <Box mt={12}>
        <form>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <GridItem mb={8}>
              <FormControl>
                <FormLabel variant="dashboardFormLabel">
                  Profile Photo
                </FormLabel>
              </FormControl>
            </GridItem>
            <GridItem mb={8}>
              <Flex>
                <Box
                  width="40px"
                  height="40px"
                  bg="#D9D9D9"
                  borderRadius={4}
                ></Box>
                <Button
                  variant="disabled"
                  bg="none"
                  color="#9E9E9E"
                  ml={8}
                  mr={6}
                >
                  Remove
                </Button>
                <Button variant="noBg">Update</Button>
              </Flex>
            </GridItem>
            {formData.map((item) => (
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
                    {Array.isArray(item.placeholder) ? (
                      <Flex>
                        {item.placeholder.map((placeholder, index) => (
                          <Input
                            key={index}
                            placeholder={placeholder}
                            mr={2}
                            minW="200px"
                          />
                        ))}
                      </Flex>
                    ) : (
                      <Input placeholder={item.placeholder} />
                    )}
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

export default ProfileSettings;

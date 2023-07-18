import React, { useState } from 'react';
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
import { verifyFormData } from '../data';
import ModalComponent from './Modal';
import { FaRegTrashAlt } from 'react-icons/fa';

const Verification = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const onOpen = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Box maxW="40vw">
      <Heading variant="settingsHeading" mt={8} mb={2}>
        Verification
      </Heading>
      <Text variant="tableCaption" color="textDark">
        Verify your identity
      </Text>
      <Box mt={12}>
        <form>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            {verifyFormData.map((item, idx) => (
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
                    <Flex alignItems="center">
                      <Input
                        placeholder={item.placeholder}
                        width="300px"
                        mr={4}
                      />
                      {idx === 1 && <FaRegTrashAlt />}
                    </Flex>
                  </FormControl>
                </GridItem>
              </>
            ))}
            <GridItem colSpan={2}>
              <Flex justifyContent="end">
                <Button variant="disabled" onClick={onOpen}>
                  Submit
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        </form>
      </Box>
      <ModalComponent
        title="OTP Verification"
        isOpen={modalOpen}
        onClose={handleClose}
        size="xl"
        overlay
        button={
          <>
            <Button size="sm" variant="outline" mr={4}>
              Resend Code
            </Button>
            <Button size="sm" variant="primary">
              Reset Password
            </Button>
          </>
        }
      >
        <Box>
          <Text variant="footerText">
            A one-time-password has been sent to your mail, enter the code to
            reset your password
          </Text>
          <Grid templateColumns="repeat(4, 1fr)" mt={5} alignItems="center">
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel variant="dashboardFormLabel">OTP Code</FormLabel>
              </FormControl>
            </GridItem>
            <GridItem colSpan={3}>
              <FormControl>
                <Flex alignItems="center">
                  <Input placeholder="123455" mr={4} />
                </Flex>
              </FormControl>
            </GridItem>
          </Grid>
        </Box>
      </ModalComponent>
    </Box>
  );
};

export default Verification;

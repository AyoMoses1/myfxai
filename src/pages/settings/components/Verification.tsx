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
import { DeleteIcon } from '@chakra-ui/icons';
import ModalComponent from './Modal';

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
                      <Input placeholder={item.placeholder} width="300px" mr={4}/>
                      {idx === 1 && <DeleteIcon />}
                    </Flex>
                  </FormControl>
                </GridItem>
              </>
            ))}
            <GridItem colSpan={2}>
              <Flex justifyContent="end">
                <Button variant="disabled" onClick={onOpen}>Submit</Button>
              </Flex>
            </GridItem>
          </Grid>
        </form>
      </Box>
      <ModalComponent
        title="Payment Notification"
        isOpen={modalOpen}
        onClose={handleClose}
        size="xl"
        overlay
        button={
          <Button size="sm" variant="primary">
            Mark as read
          </Button>
        }
      >
        <Box>
          <Text variant="footerText">
            Payment of $53.21 has been made concerning the renewal of your
            account
          </Text>
        </Box>
      </ModalComponent>
    </Box>
  );
};

export default Verification;

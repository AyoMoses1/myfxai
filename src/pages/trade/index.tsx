import React, { useState } from 'react';
import { Box, Button, Container, Text } from '@chakra-ui/react';
import ModalComponent from 'common/Modal';
import { FaPlusCircle } from 'react-icons/fa';
import Form from './components/Form';

const Index = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleTradeForm = () => {
    setModalOpen(false);
    setShowForm(true);
  };

  return (
    <Container>
      <ModalComponent
        title="Connect your account"
        isOpen={modalOpen}
        onClose={handleClose}
        size="xl"
        button={
          <Button
            size="sm"
            variant="primary"
            p={4}
            rightIcon={<FaPlusCircle />}
            onClick={() => handleTradeForm()}
          >
            Connect Account
          </Button>
        }
      >
        <Box>
          <Text variant="footerText">
            Please fill out the form below accurately to link your trading
            account with our AI-powered system. Once completed, sit back and
            enjoy the ride!
          </Text>
        </Box>
      </ModalComponent>
      {showForm && <Form />}
    </Container>
  );
};

export default Index;

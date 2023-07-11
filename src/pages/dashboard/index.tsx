import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import ModalComponent from 'common/Modal';
import { FiBell } from 'react-icons/fi';

const Index = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <Container>
      <ModalComponent
        title="No Active Plan"
        isOpen={modalOpen}
        onClose={handleClose}
        size="xl"
        button={<Button size="sm" variant="primary">Subscribe</Button>}
      >
        <Box>
          <Text variant="footerText">
            Are you sure you want to delete this post? This action cannot be
            undone.
          </Text>
        </Box>
      </ModalComponent>
    </Container>
  );
};

export default Index;

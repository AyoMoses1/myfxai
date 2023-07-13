import React, { useState } from 'react';
import { Box, Button, Container, Text } from '@chakra-ui/react';
import DynamicTable from 'common/DynamicTable';
import ModalComponent from 'common/Modal';
import { FaFilter } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import TableTop from 'common/TableTop';
import { data } from './data';
import { columns, tableTopInput } from './helpers';

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showHistory, setShowHistory] = useState(true);
  const [topInputObj, setTopInputObj] = useState<{
    name: string;
    description: string;
    project: string;
    assignedTo: string;
  }>({ name: '', description: '', project: '', assignedTo: '' });

  const onOpen = () => {
    console.log('opening');
  };

  const topTableButtons = [
    { name: 'Filter', onClick: onOpen, icon: <FaFilter color="#5B6871" /> },
    { name: 'Export', onClick: onOpen, icon: <FiArrowUp color="#5B6871" /> },
  ];

  const handleClose = () => {
    setModalOpen(false);
    setShowHistory(true);
  };

  const handleInputChange = (
    name: string,
    value: string | Record<string, Date>
  ) => {
    setTopInputObj(
      (prevState: {
        name: string;
        description: string;
        project: string;
        assignedTo: string;
      }) => ({
        ...prevState,
        [name]: value,
      })
    );
  };

  return (
    <>
      <ModalComponent
        title="No Active Plan"
        isOpen={modalOpen}
        onClose={handleClose}
        size="xl"
        button={
          <Button size="sm" variant="primary">
            Subscribe
          </Button>
        }
      >
        <Box>
          <Text variant="footerText">
            Are you sure you want to delete this post? This action cannot be
            undone.
          </Text>
        </Box>
      </ModalComponent>
      {showHistory && (
        <>
          <TableTop
            onChange={handleInputChange}
            inputObj={tableTopInput}
            buttons={topTableButtons}
            title="Trade History"
            info="View your trade history"
          />
          {/* {isLoading ? (
            <Box>...Loading</Box>
          ) : ( */}
          <DynamicTable columns={columns} data={data} />
          {/* )} */}
        </>
      )}
    </>
  );
};

export default Index;

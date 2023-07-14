import React, { useState } from 'react';
import { Box, Button, Container, Text } from '@chakra-ui/react';
import DynamicTable from 'common/DynamicTable';
import ModalComponent from 'common/Modal';
import { FaFilter } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import TableTop from 'common/TableTop';
import { data } from './data';
import { columns, tableTopInput, tabs } from './helpers';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from '@chakra-ui/react';

const Index = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const [showHistory, setShowHistory] = useState(false);
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
        <Box bg="white" px={5} pt={8} mr={8} mb={12}>
          <TableTop
            onChange={handleInputChange}
            inputObj={tableTopInput}
            buttons={topTableButtons}
            title="Invoices and Payments"
          />
          {/* {isLoading ? (
            <Box>...Loading</Box>
          ) : ( */}
          <Tabs mt={4} variant="unstyled">
            <TabList>
              {tabs.map((tab) => (
                <Tab _selected={{ color: 'blue1', fontWeight: 600 }}>
                  {tab.name}
                </Tab>
              ))}
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="#191D23"
              borderRadius="1px"
            />
          </Tabs>
          <DynamicTable columns={columns} data={data} />
          {/* )} */}
        </Box>
      )}
    </>
  );
};

export default Index;

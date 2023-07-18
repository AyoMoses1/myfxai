import React, { useState } from 'react';
import { Box, Button, Container, Text } from '@chakra-ui/react';
import DynamicTable from 'common/DynamicTable';
import ModalComponent from './components/Modal';
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
  const [modalOpen, setModalOpen] = useState(false);
  const [topInputObj, setTopInputObj] = useState<{
    name: string;
    description: string;
    project: string;
    assignedTo: string;
  }>({ name: '', description: '', project: '', assignedTo: '' });

  const onOpen = () => {
    setModalOpen(true);
  };

  const topTableButtons = [
    { name: 'Export', onClick: onOpen, icon: <FiArrowUp color="#5B6871" /> },
  ];

  const handleClose = () => {
    setModalOpen(false);
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
      <Box bg="white" px={5} pt={8} mr={8} mb={12} minH="80vh">
        <TableTop
          onChange={handleInputChange}
          inputObj={tableTopInput}
          buttons={topTableButtons}
          title="Notifications"
        />

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
        {data.length === 0 ? (
          <Box bg="red" height="100%">
            ...Loading
          </Box>
        ) : (
          <DynamicTable columns={columns(onOpen)} data={data} />
        )}
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
    </>
  );
};

export default Index;

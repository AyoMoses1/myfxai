import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Text,
  Icon,
  GridItem,
  Grid,
} from '@chakra-ui/react';
import DynamicTable from 'common/DynamicTable';
import ModalComponent from 'common/Modal';
import { FaDollarSign, FaFilter } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import TableTop from 'common/TableTop';
import { data } from './data';
import { cardsInfo, columns } from './helpers';
import Card from './components/Card';
import { RiFileCopy2Line } from 'react-icons/ri';

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
    {
      name: 'Withdraw',
      onClick: onOpen,
      icon: (
        <Icon
          as={FaDollarSign}
          color="white"
          sx={{
            borderColor: 'white',
            border: '1px solid',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            padding: '2px',
          }}
        />
      ),
      variant: 'primary',
    },
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

  const cardElements = cardsInfo.map((info, idx) => {
    return (
      <GridItem key={idx}>
        <Card title={info.title} value={info.value} bgColor={info.bgColor} />
      </GridItem>
    );
  });

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
          <Grid templateColumns="repeat(5, 1fr)" gap={6} mb={8}>
            {cardElements}
            <Grid style={{ cursor: 'pointer' }}>
              <Box display="flex" alignItems="center">
                <RiFileCopy2Line size={24}/>
                <Text pl={2} variant="smallMuted">Copy Referral Link</Text>
              </Box>
            </Grid>
          </Grid>
          <Box mb={14}>
            <TableTop
              onChange={handleInputChange}
              buttons={topTableButtons}
              title="Referrals"
            />
          </Box>
          <DynamicTable columns={columns} data={data} />
        </Box>
      )}
    </>
  );
};

export default Index;

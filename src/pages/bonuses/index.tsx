import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Text,
  Icon,
  GridItem,
  Grid,
  VStack,
  CircularProgress,
  CircularProgressLabel,
  Image,
  HStack,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
} from '@chakra-ui/react';
import DynamicTable from 'common/DynamicTable';
import ModalComponent from 'common/Modal';
import { FaDollarSign, FaFilter } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import TableTop from 'common/TableTop';
import { data } from './data';
import { cardsInfo, columns, tabs } from './helpers';
import Card from './components/Card';
import member from 'assets/icons/medal.png';
import { RiFileCopy2Line } from 'react-icons/ri';

const Index = () => {
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
      <Box bg="white" px={5} pt={8} mr={8} mb={12}>
        <Grid templateColumns="repeat(5, 1fr)" gap={6} mb={8}>
          {cardElements}
          <Grid style={{ cursor: 'pointer' }}>
            <Box display="flex" alignItems="center">
              <VStack align="start">
                <HStack>
                  <Text color="primary.light" fontSize="12px">
                    Tier 1: Member
                  </Text>
                  <Image src={member} />
                </HStack>
                <Text variant="smallMuted">22 more referrals to Tier 2</Text>{' '}
              </VStack>
              <CircularProgress
                value={40}
                isIndeterminate
                color="deepMattePink"
              >
                <CircularProgressLabel color="deepMattePink">
                  40%
                </CircularProgressLabel>
              </CircularProgress>
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
      </Box>
    </>
  );
};

export default Index;

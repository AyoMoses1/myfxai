import {
  Box,
  Heading,
  Tab,
  Tabs,
  TabList,
  TabIndicator,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import ProfileSettings from './components/Profile';
import { tabs } from './helpers';
import Password from './components/Password';
import Verification from './components/Verification';

const index = () => {
  return (
    <Box bg="white" px={5} py={8} mr={6}>
      <Heading variant="tableHeading">Settings</Heading>
      <Tabs mt={4}>
        <TabList>
          {tabs.map((tab) => (
            <Tab>{tab.name}</Tab>
          ))}
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="3px"
          bg="#191D23"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <ProfileSettings />
          </TabPanel>
          <TabPanel>
            <Password />
          </TabPanel>
          <TabPanel>
            <Verification />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default index;

import React from 'react';
import {
  Box,
  Image,
  VStack,
  Text,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import logo from 'assets/brand/logo.png';
import styled from 'styled-components';
// import { useQueryClient } from '@tanstack/react-query';
import _ from 'lodash';

import GroupNav, { SingleNav } from './GroupNav';
import NavMole from './NavMole';
import pagePaths, { pathObject } from '../utils/paths';


const Index = () => {
  // const queryClient = useQueryClient();
  const navigate = useNavigate();
  const navs = pathObject.map((item) => (
    <SingleNav
      path={item.path || ''}
      name={item.name}
      borderBottom={item.borderBottom}
      icon={item.icon}
      key={item.name}
    />
  ));

  // const handleLogout = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   localStorage.removeItem('la_auth');
  //   queryClient.cancelQueries();
  //   queryClient.clear();
  //   navigate(pagePaths.login);
  // };

  return (
    <VStack
      bgColor="white"
      width="100%"
      height="100%"
      borderRight="1px solid"
      borderColor="gray.200"
    >
      <Box py={6}>
        <Image src={logo} width="70%" height="auto" objectFit="cover" />
      </Box>
      <StyledDivider />
      <Box
        display="flex"
        flexDirection="column"
        height="78%"
        width="100%"
        overflow="auto"
      >
        <>{navs}</>

        <Box mt="auto">
          <LinkBox>
            <LinkOverlay href="">
              <NavMole isLogout={true} name="Logout" icon={<FiLogOut />} borderBottom/>
            </LinkOverlay>
          </LinkBox>
        </Box>
      </Box>
    </VStack>
  );
};

export default Index;

const StyledDivider = styled.div`
  position: relative;
  width: 100%;
  height: 1px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-image: linear-gradient(to right, #aed8ff, transparent);
  }
`;

import { HStack, Text, Icon, Box } from '@chakra-ui/react';
import { VscTriangleDown } from 'react-icons/vsc';
import { FiLogOut } from 'react-icons/fi';
import styled from 'styled-components';

const NavMole = ({
  name,
  icon,
  isLogout,
  borderBottom
}: {
  name: string;
  icon: React.ReactNode;
  isLogout?: boolean;
  borderBottom: boolean
}) => {
  return (
    <Box>
      <HStack color={isLogout ? 'red' : 'none'} px={4} py={4}>
        {icon}
        <Text fontSize="sm" variant="nav">
          {name}
        </Text>
      </HStack>
      {borderBottom && <StyledDivider />}
    </Box>
  );
};

export default NavMole;

const StyledDivider = styled.div`
  position: relative;
  width: 100%;
  height: 1px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 10;
    width: 100%;
    height: 1px;
    background-image: linear-gradient(to right, #aed8ff, transparent);
  }
`;

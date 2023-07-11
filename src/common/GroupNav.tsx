import {
  useDisclosure,
  Text,
  Link,
  Collapse,
  Box,
  HStack,
} from '@chakra-ui/react';
import Clickable from './Clickable';
import NavMole from './NavMole';
import { NavLink } from 'react-router-dom';
import { VscTriangleDown, VscTriangleRight } from 'react-icons/vsc';
import { SubNav } from 'types';

type Props = {
  sub: SubNav[] ;
  main: { name: string };
};

const GroupNav = (props: Props) => {
  const { isOpen, onToggle } = useDisclosure();
  const navs = props.sub.map((item) => <SingleNav {...item} key={item.path}/>);

  return (
    <Box mb={3}>
      <Clickable height='auto' onClick={onToggle}>
        <HStack mb={2} ml={6}>
          <Text variant='smallBoldNormal' fontSize='sm'>
            {props.main.name}
          </Text>
          {isOpen ? <VscTriangleDown /> : <VscTriangleRight />}
        </HStack>
      </Clickable>
      <HStack ml={2}>
      <Collapse in={isOpen} animateOpacity>
          {navs}
      </Collapse>
      </HStack>
    </Box>
  );
};

export const SingleNav = ({
  path,
  name,
  icon,
  borderBottom
}: {
  path: string;
  name: string;
  icon: React.ReactNode;
  borderBottom: boolean;
}) => {
  return (
    <Link as={NavLink} to={path}>
      <NavMole name={name} icon={icon} borderBottom={borderBottom}/>
    </Link>
  );
};

export default GroupNav;

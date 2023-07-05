import {
  Box,
  Grid,
  GridItem,
  Text,
  Link,
  HStack,
  IconButton,
  useColorMode,
  Flex,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { footerInfo, links, socialIcons } from './helpers';

function AuthFooter() {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'dark' ? 'primary.light' : 'lighterBlue';
  const linkColor = colorMode === 'dark' ? 'textWhite' : 'primary.light';

  return (
    <StyledBox bg={bgColor} color="white" paddingTop={2}>
      <Flex justify="center" alignItems="center">
        <Grid templateColumns="repeat(6, 1fr)">
          <GridItem colSpan={2}>
            <HStack spacing={4}>
              {socialIcons?.map((icon, idx) => (
                <Link href="https://twitter.com" key={idx}>
                  <IconButton
                    aria-label="Facebook"
                    icon={icon}
                    borderRadius="full"
                    borderWidth={1}
                    borderColor="lightBlue"
                    size="sm"
                    color="lightBlue"
                  />
                </Link>
              ))}
            </HStack>
          </GridItem>
          <GridItem colSpan={2}>
            <HStack spacing={4}>
              {links.map((link, idx) => (
                <Link variant="footerLink">{link.name}</Link>
              ))}
            </HStack>
          </GridItem>
          <GridItem colSpan={2}>
            <Text variant="footerText">
              © Copyright 2023, All Rights Reserved by myFXai.com
            </Text>
          </GridItem>
        </Grid>
      </Flex>
    </StyledBox>
  );
}

export default AuthFooter;


const StyledBox = styled(Box)`
  position: sticky;
  left: 0;
  bottom: 0;
  width: 100%;
`

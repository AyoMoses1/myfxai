import {
  Box,
  Grid,
  GridItem,
  Heading,
  ListItem,
  Text,
  Link,
  List,
  HStack,
  IconButton,
  Divider,
  Center,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { footerInfo, jumbotronData } from './helpers';

function Footer() {
  return (
    <Box bg="lighterBlue" color="white" py={10}>
      <Box maxW="90%" mx="auto" px={6}>
        <Jumbotron mb="112px" py={10} px={20}>
          <Heading textAlign="center" fontSize={20} mb={2}>
            {jumbotronData.title}
          </Heading>
          <Text color="textWhite" fontSize={16}>
            {jumbotronData.content}
          </Text>
        </Jumbotron>
        <Grid templateColumns="repeat(4, 1fr)" gap={12}>
          {footerInfo.map((item, idx) => {
            return idx === 0 ? (
              <GridItem>
                <FooterListHeader mb={10} color="primary" fontSize={13}>
                  {item.title}
                </FooterListHeader>
                <Text variant="footerText">{item.content}</Text>
                <HStack spacing={4} my={10}>
                  {item.icons?.map((icon) => (
                    <Link href="https://twitter.com">
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
            ) : (
              <GridItem>
                <FooterListHeader mb={10} color="primary" fontSize={13}>
                  {item.title}
                </FooterListHeader>
                <List>
                  {item.menu?.map((menuItem) => (
                    <ListItem mb={4}>
                      <Link variant="footerLink">{menuItem.name}</Link>
                    </ListItem>
                  ))}
                </List>
              </GridItem>
            );
          })}
        </Grid>
        <Divider orientation="horizontal" bg="lightBlue" height="1px" mb={6}/>
        <Center>
          <Text variant="footerText">
            © Copyright 2023, All Rights Reserved by myFXai.com
          </Text>
        </Center>
      </Box>
    </Box>
  );
}

export default Footer;

const Jumbotron = styled(Box)`
  background: #003566;
  border-radius: 20px;
`;

const FooterListHeader = styled(Heading)`
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

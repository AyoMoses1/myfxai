import { useState } from 'react';
import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  TableCaption,
} from '@chakra-ui/react';
import { getStatusTag } from '../helpers';
import styled from 'styled-components';
import { tableData, tableHeaders } from '../data';
const Invoice = () => {
  const [status, setStatus] = useState(false);
  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" py={24}>
        <GridItem colSpan={1}>
          {getStatusTag(status ? 'paid' : 'unpaid')}
        </GridItem>
        <GridItem colSpan={3}>
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem justifySelf="end">
              <Box mb={4}>
                <StyledHeading>Issued</StyledHeading>
                <StyledHeading>01 Apr, 2023</StyledHeading>
              </Box>
              <Box>
                <StyledHeading>Due</StyledHeading>
                <StyledHeading>15 Apr, 2023</StyledHeading>
              </Box>
            </GridItem>
            <GridItem justifySelf="end">
              <Box mb={4}>
                <StyledHeading>Billed to</StyledHeading>
                <StyledHeading>Company Name</StyledHeading>
              </Box>
              <Box>
                <Text variant="tableCaption">Company address City</Text>
                <Text variant="tableCaption">Country - 00000</Text>
                <Text variant="tableCaption">+0 (000) 123-4567</Text>
              </Box>
            </GridItem>
            <GridItem justifySelf="end">
              <Box mb={4}>
                <StyledHeading>From</StyledHeading>
                <StyledHeading>Alvish Baldha</StyledHeading>
              </Box>
              <Box>
                <Text variant="tableCaption">Address line</Text>
                <Text variant="tableCaption">City, State, IN - 000 000</Text>
                <Text variant="tableCaption">TAX ID 00XXXXX1234X0XX</Text>
              </Box>
            </GridItem>
            <GridItem colSpan={3} >
              <TableContainer>
                <Table variant="unstyled">
                  <Thead>
                    <Tr>
                      {tableHeaders.map((header) => (
                        <Th>{header?.name}</Th>
                      ))}
                    </Tr>
                  </Thead>
                  <Tbody>
                    {tableData.map((item) => (
                      <Tr>
                        <Td>{item.service}</Td>
                        <Td>{item.quantity}</Td>
                        <Td>{item.rate}</Td>
                        <Td>{item.lineTotal}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
};

export default Invoice;

const StyledHeading = styled(Text)`
  color: #181c26;
  font-family: Inter;
  font-size: 14px !important;
  font-style: normal;
  margin-bottom: 10px;
  font-weight: 600;
  line-height: 14px;
`;

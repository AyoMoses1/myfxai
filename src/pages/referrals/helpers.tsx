import {
  createColumnHelper,
  ColumnDef,
  CellContext,
} from '@tanstack/react-table';
import * as yup from 'yup';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import { RiSearchLine } from 'react-icons/ri';

import { Tag, Checkbox, Text } from '@chakra-ui/react';

const statusTypes = [
  { name: 'Buy', color: 'matteGreen', bgColor: 'matteGreenFade' },
  { name: 'Sell', color: 'errorRed', bgColor: 'errorRedFade' },
];

const getStatusTag = (name: string) => {
  let tag;
  statusTypes.forEach((status) => {
    if (status.name === name) {
      tag = (
        <Tag variant="solid" color={status.color} bg={status.bgColor} px={4}>
          {status.name}
        </Tag>
      );
    }
  });
  return tag;
};

export const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    description: yup.string().required(),
    project: yup.string().required(),
    assignedTo: yup.string().required(),
  })
  .required();

const columnHelper = createColumnHelper<ITData>();

export const columns: ITDataColumnDef<ITData>[] = [
  columnHelper.accessor('accountId', {
    header: 'Account ID',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('symbol', {
    header: 'Symbol',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('billingDate', {
    header: 'Billing Date',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('amount', {
    cell: (info) => (
      <Text
        color="tableHeader"
        style={{
          wordBreak: 'keep-all',
          fontWeight: '700',
          fontSize: '14px',
          fontFamily: 'Inter',
        }}
      >
        ${info.getValue<string>()}
      </Text>
    ),
  }),
];

export const cardsInfo = [
  {
    title: 'Total Number of Referrals',
    value: '123',
    bgColor: 'lighterBlue',
  },
  {
    title: 'Amount Earned',
    value: '$500',
    bgColor: 'lighterBlue',
  },
  {
    title: 'Amount Withdrawn',
    value: '$300',
    bgColor: 'lighterBlue',
  },
  {
    title: 'Referral Balance',
    value: '$200',
    bgColor: 'lightBlue',
  },
];

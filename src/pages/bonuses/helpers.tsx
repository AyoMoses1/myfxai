import {
  createColumnHelper,
  ColumnDef,
  CellContext,
} from '@tanstack/react-table';
import * as yup from 'yup';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import { RiSearchLine } from 'react-icons/ri';

import { Tag, Checkbox, Text, Button } from '@chakra-ui/react';

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
  columnHelper.accessor('rank', {
    header: 'RANK',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('progress', {
    header: 'PROGRESS',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('amount', {
    header: 'AMOUNT',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('st', {
    header: '',
    cell: (info) => (
      <Button bg="#E7EAEE" color="muted" size="sm">
        Pay
      </Button>
    ),
  }),
];

export const cardsInfo = [
  {
    title: 'Stage 1 Members',
    value: '12',
    bgColor: 'mattePink',
  },
  {
    title: 'Stage 2 Members',
    value: '3',
    bgColor: 'mattePink',
  },
  {
    title: 'Stage 3 Members',
    value: '1',
    bgColor: 'mattePink',
  },
  {
    title: 'Total Referrals',
    value: '16',
    bgColor: 'deepMattePink',
  },
];

export const tabs = [
  {
    name: "Ranking"
  },
  {
    name: "Stage 1"
  },
  {
    name: "Stage 2"
  },
  {
    name: "Stage 3"
  }
]


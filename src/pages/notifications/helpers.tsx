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
  { name: 'read', color: 'blue1', bgColor: '#AED8FF' },
  { name: 'unread', color: 'secondary', bgColor: '#FFF6C9' },
];

export const getStatusTag = (name: string) => {
  let tag;
  statusTypes.forEach((status) => {
    if (status.name === name) {
      tag = (
        <Tag variant="solid" color={status.color} bg={status.bgColor} px={4}>
          {status.name.charAt(0).toUpperCase() + status.name.slice(1)}
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

export const columns = (onOpen: () => void): ITDataColumnDef<ITData>[] => {
  return [
    columnHelper.accessor('title', {
      header: 'TITLE',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('description', {
      header: 'DESCRIPTION',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('date', {
      header: 'DATE',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('status', {
      cell: (info) => getStatusTag(info.getValue<string>()),
    }),
    columnHelper.accessor((row) => row.status, {
      header: 'ss',
      cell: (info) => (
        <Button
          variant={info.getValue() === 'read' ? 'disabled' : 'primary'}
          size="sm"
          disabled
          onClick={() => {
            if (info.getValue() === 'unread') {
              onOpen();
            }
          }}
        >
          Read
        </Button>
      ),
    }),
  ];
};

export const inputObjList = (
  register: UseFormRegister<TFormValues>,
  errors: FieldErrorsImpl<TFormValues>
) => [
  {
    name: 'name',
    label: 'Task',
    placeholder: '',
    type: 'text',
    register: register('name', {
      required: 'Please enter a valid task name',
    }),
    isInvalid: !!errors.name,
    error: errors?.name,
  },
  {
    name: 'description',
    label: 'Description',
    placeholder: '',
    type: 'text',
    register: register('description'),
    isInvalid: !!errors.description,
    error: errors?.description,
  },
  {
    name: 'project',
    label: 'Project',
    placeholder: 'Enter email address',
    type: 'select',
    options: [
      { value: 'pending', name: 'Pending' },
      { value: 'inProgress', name: 'Active' },
      { value: 'completed', name: 'Suspended' },
    ],

    register: register('project', {
      required: 'Please select a parent object',
    }),
    isInvalid: !!errors.project,
    error: errors?.project,
  },
  {
    name: 'assignedTo',
    label: 'Assignee',
    type: 'select',
    options: [
      { value: 'PENDING', name: 'Pending' },
      { value: 'ACTIVE', name: 'Active' },
      { value: 'SUSPENDED', name: 'Suspended' },
      { value: 'IN_ACTIVE', name: 'Inactive' },
      { value: 'ON_HOLD', name: 'On hold' },
    ],
    register: register('assignedTo', {
      required: 'Please select an assignee',
    }),
    isInvalid: !!errors.assignedTo,
    error: errors?.assignedTo,
  },
];

export const tableTopInput = [
  {
    name: 'search',
    label: '',
    placeholder: 'What history are you looking for?',
    type: 'text',
    icon: <RiSearchLine color="#B0BABF" />,
    width: '60%',
    variant: 'tableInput',
  },
];

export const tempData = {
  fullName: 'Adeniji Adefisayo',
  state: 'Osun',
  walletBalance: 2300,
  ageBracket: 'THIRTYONE_TO_FORTY',
  mobileNo: '+23498019290019',
  email: 'test@yahoo.com',
};

const orderStatuses = [
  { value: 'COMPLETED', name: 'Completed' },
  { value: 'PENDING', name: 'Pending' },
  { value: 'PROCESSING', name: 'Processing' },
  { value: 'CANCELLED', name: 'Cancelled' },
  { value: '', name: 'All' },
];

export const historyTableTopInput: InputObj[] = [
  {
    name: 'query',
    label: '',
    placeholder: 'Order Number',
    type: 'text',
  },
  {
    name: 'status',
    label: '',
    placeholder: 'Filter by Status',
    type: 'select',
    defaultValue: '',
    options: orderStatuses.map(({ value, name }) => ({ value, name })),
  },

  {
    name: 'dateRange',
    label: '',
    placeholder: '',
    type: 'dateRange',
  },
];

export const data = [
  {
    name: 'Valon Timesheet',
    description: 'This is just a test project',
  },
  {
    name: 'Valon Notepad',
    description: 'This is just a test project',
  },
  {
    name: 'Valon Timesheet',
    description: 'This is just a test project',
  },
];

export const tabs = [
  {
    name: 'Read',
  },
  {
    name: 'Unread',
  },
  {
    name: 'All',
  },
];

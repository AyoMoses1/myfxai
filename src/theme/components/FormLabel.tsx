import { StyleFunctionProps } from '@chakra-ui/styled-system';

export const formLabelStyle = {
  baseStyle: (props: StyleFunctionProps) => ({
    fontSize: { base: '14px', lg: '16px' },
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color:  "#344054",
  }),

  defaultProps: {
    size: 'md',
    variant: 'normal',
    colorScheme: (props: StyleFunctionProps) => props.theme.colors.primary,
  },
};

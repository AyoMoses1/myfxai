import { StyleFunctionProps } from '@chakra-ui/styled-system';

export const formLabelStyle = {
  baseStyle: (props: StyleFunctionProps) => ({
    fontSize: { base: '14px', lg: '16px' },
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#344054',
  }),

  variants: {
    dashboardFormLabel: (props: StyleFunctionProps) => ({
      color: '#090914',
      fontFamily: 'Puritan',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '24px',
      letterSpacing: '0.5px',
    }),
  },

  defaultProps: {
    size: 'md',
    variant: 'normal',
    colorScheme: (props: StyleFunctionProps) => props.theme.colors.primary,
  },
};

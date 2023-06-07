import { StyleFunctionProps } from '@chakra-ui/styled-system';

export const HeadingStyle = {
  baseStyle: () => ({
    fontSize: { base: '16px', lg: '1.2vw' },
  }),

  sizes: {
    md : {
      fontSize: '60px',
      fontWeight: '600',
      lineHeight: '72px',
      letterSpacing: '-0.04em'
    }
  },
  variants: {
    primary: (props: StyleFunctionProps) => ({
      color: props.theme.colors.primary,
    }),
    secondary: (props: StyleFunctionProps) => ({
      fontWeight: '600',
    }),

    cardHeader: (props: StyleFunctionProps) => ({
      fontWeight: '700',
      fontSize: '18px',
      color: props.theme.colors.primary,

    }),
    defaultProps: {
      size: 'md',
      variant: 'primary',
  },

  
  },
  defaultProps: {},
};


import { StyleFunctionProps } from '@chakra-ui/react';

export const HeadingStyle = {
  baseStyle: () => ({
    fontSize: { base: '16px', lg: '1.2vw' },
  }),

  sizes: {
    md: {
      fontSize: '60px',
      fontWeight: '600',
      lineHeight: '72px',
      letterSpacing: '-0.04em',
    },
  },
  variants: {
    primary: (props: StyleFunctionProps) => ({
      color:
        props.theme.colors.primary[
          props.colorMode === 'dark' ? 'dark' : 'light'
        ],
      fontSize: '60px',
      fontStyle: 'semi-bold',
      lineHeight: '72px',
    }),
    secondary: (props: StyleFunctionProps) => ({
      color:
        props.colorMode === 'dark'
          ? props.theme.colors.primary['dark']
          : props.theme.colors.gray4,
      fontWeight: '700',
      fontSize: '41px',
    }),
    tertiary: (props: StyleFunctionProps) => ({
      color:
        props.colorMode === 'dark'
          ? props.theme.colors.primary['dark']
          : props.theme.colors.gray4,
      fontWeight: '600',
      fontSize: '36px',
    }),
    quaternary: (props: StyleFunctionProps) => ({
      color:
        props.colorMode === 'dark'
          ? props.theme.colors.primary['dark']
          : props.theme.colors.heroText,
      fontWeight: '500',
      fontSize: '28px',
    }),
    modalHeader: (props: StyleFunctionProps) => ({
      color:
        props.colorMode === 'dark'
          ? props.theme.colors.primary['dark']
          : '#101828',
      fontWeight: '500',
      lineHeight: '28px',
      fontSize: '18px',
    }),
    cardHeader: (props: StyleFunctionProps) => ({
      fontWeight: '700',
      fontSize: '18px',
      color: props.theme.colors.primary,
    }),
    formHeader: (props: StyleFunctionProps) => ({
      fontWeight: '600',
      fontSize: '18px',
      color: props.theme.colors.primary.light,
      lineHeight: '30px'
    }),
    defaultProps: {
      size: 'md',
      variant: 'primary',
    },
  },
  defaultProps: {},
};

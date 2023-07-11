import { StyleFunctionProps } from '@chakra-ui/styled-system';

export const InputStyle = {
  baseStyle: (props: StyleFunctionProps) => ({
    field: {
      bg: 'white',
      borderWidth: 1,
      ':focus': {
        borderWidth: 2,
        borderColor: props.theme.colors.primary,
      },
    },
  }),

  size: {
    sm: {
      // padding: 4,
    },
    md: {
      padding: { base: 12, lg: 6 },
    },
  },
  variants: {
    borderless: (props: StyleFunctionProps) => ({
      field: {
        borderWidth: 0,
        borderColor: 'transparent',
        ':focus': {
          borderWidth: 0,
          borderColor: 'transparent',
        },
      },
    }),
    fadeBorder: (props: StyleFunctionProps) => ({
      field: {
        borderWidth: '1.49px',
        borderImageSlice: 1,
        borderImageWidth: '1px',
        borderImageRadius:'12px',
        borderImageOutset: 0,
        borderImageRepeat: 'stretch',
        borderImageSource:
          'linear-gradient(to right, grey 28.27%, white 100%)',
        borderRadius: '12px',
        borderColor: 'transparent',
        _focus: {
          borderWidth: '1.49px',
          // borderColor: 'transparent',
        },
      },
    }),
  },
  defaultProps: {
    size: 'md',
    variant: 'normal',
    colorScheme: (props: StyleFunctionProps) => props.theme.colors.primary,
  },
};

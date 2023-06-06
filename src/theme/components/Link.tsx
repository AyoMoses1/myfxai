import { StyleFunctionProps } from '@chakra-ui/styled-system';

export const LinkStyle = {
  baseStyle: () => ({
    marginBottom: '2',
  }),

  sizes: {
    sm: {
      fontSize: "16px"
    }
  },
  variants: {
    normal: (props: StyleFunctionProps) => ({
        fontWeight: 'normal',
        color: props.theme.colors.link,
        '_activeLink': {
            color: props.theme.colors.primary,
            fontWeight: 'bold',
        },
        '_hover': {
          color: props.theme.colors.primary,
          textDecoration:'none',
        }
    }),
  
  },
  defaultProps: {
    variant: 'normal',
    size: 'sm'
  },
};

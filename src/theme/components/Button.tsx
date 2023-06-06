import { StyleFunctionProps } from '@chakra-ui/styled-system';

export const ButtonStyle = {   
  sizes: {
    sm: {
      px: 5,
      py: 3.5
    },
    md: {
      padding: { base: 12, lg: 6 },
    },
  },
  variants: {
    primary: (props: StyleFunctionProps) => ({
      bg: props.theme.colors.primary,
      color: '#fff',
      width: '127px',
      borderRadius: "5px",
      ':hover': {
        bg: props.theme.colors.secondary,
        boxShadow: 'md',
      },
      ':focus': {
        bg: props.theme.colors.secondary,
        boxShadow: 'md',
      },
      ':disabled': {
        bg: props.theme.colors.muted,
        ':hover': {
          bg: props.theme.colors.secondary,
          boxShadow: 'md',
        }
      }
    }),
    secondary: (props: StyleFunctionProps) => ({
      bg: props.theme.colors.secondary,
      color: '#fff',
      width: '127px',
      borderRadius: "5px",
      ':hover': {
        bg: props.theme.colors.primary,
        boxShadow: 'md',
      },
      ':focus': {
        bg: props.theme.colors.primary,
        boxShadow: 'md',
      },
      ':disabled': {
        bg: props.theme.colors.muted,
        ':hover': {
          bg: props.theme.colors.secondary,
          boxShadow: 'md',
        }
      }
    }),
    noBg: (props: StyleFunctionProps) => ({
      bg:'#EDF2F7',
      ':hover': {
        boxShadow: 'md',
      },
    }),
    outline: (props: StyleFunctionProps) => {
      return {
      bg:  '#fff',
      border: `1px solid ${props.theme.colors.primary}`,
      outline: 'red',
      color: props.theme.colors.primary,
      borderRadius: "5px",
      width: '127px',
      ':hover': {
        boxShadow: 'md',
        bg: props.theme.colors.primary,
        color: "#fff"
      },
    }},
    half: (props: StyleFunctionProps) => ({
        bg: props.theme.colors.primary,
        color: '#fff',
        ':hover': {
          bg: props.theme.colors.secondary,
          boxShadow: 'md',
        },
        width: '50%'
      }),
    full: (props: StyleFunctionProps) => ({
        bg: props.theme.colors.primary,
        color: '#fff',
        ':hover': {
          bg: props.theme.colors.secondary,
          boxShadow: 'md',
        },
        width: '100%'
      }),
  },
  defaultProps: {
    size: 'md',
    variant: 'normal'
  },
};
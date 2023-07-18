import { StyleFunctionProps } from '@chakra-ui/styled-system';

export const ButtonStyle = {
  sizes: {
    sm: {
      px: 5,
      py: 3.5,
    },
    md: {
      padding: { base: 12, lg: 6 },
    },
  },
  variants: {
    primary: (props: StyleFunctionProps) => ({
      bg: props.theme.colors.blue1,
      color: '#fff',
      fontWeight: '600',
      borderRadius: '5px',
      ':hover': {
        bg: props.theme.colors.secondary,
        boxShadow: 'md',
      },
      ':focus': {
        bg: props.theme.colors.blue1,
        boxShadow: 'md',
      },
      ':disabled': {
        bg: props.theme.colors.muted,
        ':hover': {
          bg: props.theme.colors.secondary,
          boxShadow: 'md',
        },
      },
    }),
    secondary: (props: StyleFunctionProps) => ({
      bg: props.theme.colors.secondary,
      color: props.theme.colors.primary,
      width: '127px',
      borderRadius: '5px',
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
        },
      },
    }),
    noBg: (props: StyleFunctionProps) => ({
      ':hover': {
        bg: props.theme.colors.blue1,
        color: '#fff',
        fontWeight: '600',
        borderRadius: '5px',
      },
    }),
    outline: (props: StyleFunctionProps) => {
      return {
        border: `1px solid`,
        borderColor: `${
          props.theme.colors.primary[
            props.colorMode === 'dark' ? 'dark' : 'light'
          ]
        }`,
        outline: 'red',
        color:
          props.theme.colors.primary[
            props.colorMode === 'dark' ? 'dark' : 'light'
          ],
        borderRadius: '5px',
        ':hover': {
          boxShadow: 'md',
          bg: props.theme.colors.primary[
            props.colorMode === 'dark' ? 'dark' : 'light'
          ],
          color: '#fff',
        },
      };
    },
    disabled: (props: StyleFunctionProps) => ({
      bg: '#E7EAEE',
      color: props.theme.colors.muted,
      ':hover': {
        bg: '#E7EAEE',
      },
    }),
    half: (props: StyleFunctionProps) => ({
      bg: props.theme.colors.primary,
      color: '#fff',
      ':hover': {
        bg: props.theme.colors.secondary,
        boxShadow: 'md',
      },
      width: '50%',
    }),
    full: (props: StyleFunctionProps) => ({
      bg: props.theme.colors.primary.light,
      color: '#fff',
      ':hover': {
        bg: props.theme.colors.secondary,
        boxShadow: 'md',
      },
      width: '100%',
    }),
  },
  defaultProps: {
    size: 'md',
    variant: 'normal',
  },
};

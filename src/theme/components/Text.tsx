import { StyleFunctionProps } from '@chakra-ui/styled-system';

export const TextStyle = {
  baseStyle: () => ({
    fontSize: { base: '16px', lg: '1.2vw' },
  }),

  size: {},
  variants: {
    mutedCenter: (props: StyleFunctionProps) => ({
      color: props.theme.colors.muted,
      textAlign: 'center',
    }),
    smallMuted: () => ({
      color: '#898780',
      fontFamily: 'Inter',
      fontSize: '10px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '6px',
    }),
    normalBold: (props: StyleFunctionProps) => ({
      fontWeight: '600',
    }),
    smallBoldNormal: (props: StyleFunctionProps) => ({
      fontWeight: 'bold',
      fontSize: '1.15vw',
    }),
    nav: (props: StyleFunctionProps) => ({
      fontSize: { base: '16px', lg: '1.1vw' },
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
      color:
        props.colorMode === 'dark'
          ? props.theme.colors.primary['dark']
          : props.theme.colors.gray1,
    }),
    whiteBoldNormal: (props: StyleFunctionProps) => ({
      fontWeight: 'bold',
      textAlign: 'center',
      color: props.theme.colors.white,
    }),
    heroText: (props: StyleFunctionProps) => ({
      fontWeight: '400',
      color:
        props.colorMode === 'dark'
          ? props.theme.colors.primary['dark']
          : '#475569',
      fontSize: '18px',
    }),
    quaternary: (props: StyleFunctionProps) => ({
      color:
        props.colorMode === 'dark'
          ? props.theme.colors.primary['dark']
          : props.theme.colors.heroText,
      fontWeight: '400',
      fontSize: '18px',
    }),
    cardText: (props: StyleFunctionProps) => ({
      fontWeight: '400',
      color:
        props.colorMode === 'dark'
          ? props.theme.colors.primary['dark']
          : props.theme.colors.gray1,
      fontSize: '15px',
    }),
    reviewText: (props: StyleFunctionProps) => ({
      fontWeight: '200',
      fontSize: 24,
      lineHeight: 7,
      textAlign: 'center',
      letterSpacing: '-0.02em',
      color:
        props.colorMode === 'dark'
          ? props.theme.colors.primary['dark']
          : '#454343',
    }),
    footerText: (props: StyleFunctionProps) => ({
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 5,
      color:
        props.colorMode === 'dark'
          ? props.theme.colors.textWhite
          : props.theme.colors.gray1,
    }),
    tableCaption: (props: StyleFunctionProps) => ({
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 6,
      letterSpacing: '-0.084px',
      color:
        props.colorMode === 'dark'
          ? props.theme.colors.textWhite
          : '#363636',
    }),
    headerCaption: (props: StyleFunctionProps) => ({
      fontWeight: '500',
      fontSize: 18,
      lineHeight: 6,
      color:
        props.colorMode === 'dark'
          ? props.theme.colors.textWhite
          : props.theme.colors.gray1,
    }),
    faqQuestion: (props: StyleFunctionProps) => ({
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '28px',
      color:
        props.colorMode === 'dark'
          ? props.theme.colors.primary['dark']
          : '#101828',
    }),
    faqAnswer: (props: StyleFunctionProps) => ({
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
      color: '#667085',
    }),
    smallLight: {
      fontWeight: '300',
      fontSize: { base: '8px', lg: '1vw' },
    },
  },
  defaultProps: {},
};

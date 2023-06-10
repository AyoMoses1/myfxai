import { extendTheme } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { ButtonStyle as Button } from './components/Button';
import { ProgressStyle as Progress } from './components/Progress';
import { HeadingStyle as Heading } from './components/Heading';
import { InputStyle as Input } from './components/Input';
import { formLabelStyle as FormLabel } from './components/FormLabel';
import { TextStyle as Text } from './components/Text';
import { LinkStyle as Link } from './components/Link';

const theme = extendTheme({
  breakpoints: {
    sm: '30em', // Small screens (up to 480px)
    md: '48em', // Medium screens (up to 768px)
    lg: '62em', // Large screens (up to 992px)
    xl: '80em', // Extra-large screens (up to 1200px)
  },
  
  colors: {
    primary: '#000814',
    secondary: '#FFC300',
    link: '#333333',
    muted: '#64748b',
    blue1: '#003566',
    blue2: '#001D3D',
    fadeBlue: '#F3F9FF',
    lightGrey: ' #F9F9F9',
    lightPink: '#FEF1FF',
    gray1: '#333333',
    gray3: '#BDBDBD',
    gray4: '#18181B',
    textDark: '#1C1C1C',
    textWhite: '#EFEFEF',
    background: '#141414',
    lightBlue: '#3188D8',
    lighterBlue: ' #AED8FF',
    matteGreen: '#50B887',
    lightGreen: '#DAFFED',
    darkGreen: '#65D19E',
    errorRed: '#E13131',
    mattePink: '#E0B7C7',
    deepMattePink: '#B4557A',
    lightYellow: '#FFFDF2',
    secondYellow: '#FFD60A',
    purple: '#7F56D9',
  },

  fonts: {
    heading: 'Inter, sans-serif',
  },

  components: {
    Button,
    Input,
    FormLabel,
    Text,
    Link,
    Heading,
    Progress,
  },

  textStyles: {
    normal: {
      fontSize: { base: '16px', lg: '1.2vw' },
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    },
  },

  layerStyles: {
    card: {
      backgroundColor: 'white',
      borderRadius: 'md',
    },
  },

  styles: {
    global: (props: StyleFunctionProps) => ({
      'html, body': {
        fontSize: ['sm', 'md'],
        color: props.theme.colors.gray[600],
        lineHeight: 'tall',
        backgroundColor: 'gray2',
        fontFamily: 'Plus Jakarta Sans, sans-serif',
      },
      button: {
        fontFamily: 'Inter, sans-serif',
      },
    }),
  },
});

export default theme;

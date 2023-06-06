import { extendTheme } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { ButtonStyle as Button } from './components/Button';
import { InputStyle as Input } from './components/Input';
import { formLabelStyle as FormLabel } from './components/FormLabel';
import { TextStyle as Text } from './components/Text';
import { LinkStyle as Link } from './components/Link';

const theme = extendTheme({
  colors: {
    primary: '#000814',
    secondary: '#FFC300',
    link: '#333333',
    muted: '#64748b',
    blue1: '#003566',
    blue2: '#001D3D',
    gray3: '#BDBDBD',
    textDark: '#1C1C1C',
    textWhite: '#EFEFEF',
    background: '#141414',
    lightBlue: '#3188D8',
    lighterBlue: ' #AED8FF',
    matteGreen: '#50B887',
    lightGreen: '#DAFFED',
    errorRed: '#E13131',
    mattePink: '#E0B7C7',
    deepMattePink: '#B4557A',
    lightYellow: '#FFFDF2',
    secondYellow: '#FFD60A',
    
  },

  components: {
    Button,
    Input,
    FormLabel,
    Text,
    Link,
  },

  textStyles: {
    normal: {
      fontSize: { base: '16px', lg: '1.2vw' },
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
        fontFamily: `'Lato', sans-serif`,
      },
    }),
  },
});

export default theme;
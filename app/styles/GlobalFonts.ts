import { createGlobalStyle } from 'styled-components';

import Montserrat from './fonts/Montserrat-VariableFont_wght.ttf';
import NameOfYourFontWoff2 from './nameOfYourFont.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'),
    url(${Montserrat}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
`;
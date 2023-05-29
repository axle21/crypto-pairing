import { createGlobalStyle, DefaultTheme } from 'styled-components';

// Define the theme type
export interface MyTheme extends DefaultTheme {
  backgroundColor: string;
  textColor: string;
}

// Create a global style to set the base styles for your application
export const GlobalStyle = createGlobalStyle<any>`
  body, html {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  .checkbox-container {
    text-align: center;
  }

  .body-section svg {
    fill: ${(p) => p.isDarkMode ? 'white' : 'black'};
  }

  .ant-result{
    padding:0;
  }
`;

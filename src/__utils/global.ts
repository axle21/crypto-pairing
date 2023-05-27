import { createGlobalStyle, DefaultTheme } from 'styled-components';


// Define the theme type
export interface MyTheme extends DefaultTheme {
    backgroundColor: string;
    textColor: string;
}


// Create a global style to set the base styles for your application
export const GlobalStyle = createGlobalStyle`
    body, html {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        min-height:100vh;
    }  

    .checkbox-container{
        text-align:center;
    }
    

`;
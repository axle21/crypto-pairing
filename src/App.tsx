import React from 'react'
import { ConfigProvider,theme, Button, Card, Space } from "antd";
import { GlobalStyle } from './__utils/global';
import Form from './Component/Form'
import Layout from './__layout/Layout'
import { SymbolTypes } from './__utils/types'
import CardContainer from './Component/CardContainer';


function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = React.useState(false);


  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };


    return (
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        }}>
          <GlobalStyle />
          <Layout>
            <Form />
            <CardContainer/>
            {/* <Card  style={{minHeight:"45vh" ,width:"100%"}}>
            <Button onClick={handleClick} >
                  Change Theme to {isDarkMode ? "Light" : "Dark"}
            </Button>
            </Card> */}
          </Layout>

      </ConfigProvider>
    );
}

export default App

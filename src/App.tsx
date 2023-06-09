import  { useState } from 'react';
import { ConfigProvider, theme } from 'antd';
import { GlobalStyle } from './__utils/global';
import Form from './Component/Form';
import Layout from './__common/Layout';
import CardContainer from './Component/CardContainer';
import Header from './Component/Header';
import Footer from './Component/Footer'

const { defaultAlgorithm, darkAlgorithm } = theme;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClickDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <GlobalStyle isDarkMode={isDarkMode} />
      <Header isDarkMode={isDarkMode} handleClickDarkMode={handleClickDarkMode} />
      <Layout isDarkMode={isDarkMode}>
        <Form isDarkMode={isDarkMode}/>
        <CardContainer/>
      </Layout>
      <Footer isDarkMode={isDarkMode}/>
    </ConfigProvider>
  );
};

export default App;

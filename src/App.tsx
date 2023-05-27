import React from 'react'
import { ConfigProvider,theme, Button, Card, Space } from "antd";
import { GlobalStyle } from './__utils/global';
import Form from './Component/Form'
import Layout from './__layout/Layout'
import { SymbolsType,ExchangeInfoType,SymbolTypes,PairingType } from './__utils/types'
import CardContainer from './Component/CardContainer';
import axios, {AxiosResponse} from 'axios'
import {API_BASE_URL} from './__utils/constants'
import {getListOfSymbols} from './__utils/helpers'
 

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [symbol , setSymbol] = React.useState<SymbolsType>({baseAsset:'',quoteAsset:''})
  const [pairing , setPairing] = React.useState<PairingType>({isPairing: false , isPairingError: false,errorMsg:''})
  const [symbols, setSymbols] = React.useState<SymbolTypes>([]);
 
  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };

  const handleCryptoChanges = (pair:number, _symbol:string) : void => {
    if(pair === 1 ){
      setSymbol({...symbol ,baseAsset: _symbol  })
    } else {
      setSymbol({...symbol,quoteAsset: _symbol  })
    }
  }



  React.useEffect(() => {
      const fetchData = async () => {
      try {
          const response: AxiosResponse<ExchangeInfoType> = await axios.get(
          `${API_BASE_URL}/exchangeInfo`
          );

          setSymbols(response.data.symbols)

      } catch (error) {
          console.error('Error fetching data:', error);
      }
      };

      fetchData();
  }, []);


  React.useEffect(()=>{
      const {baseAsset, quoteAsset } = symbol
      if(baseAsset !== '' && quoteAsset !== ''){
          const symbol:string = baseAsset + quoteAsset
          setPairing({...pairing, isPairing :false})
          // if (symbolExist) {
          //   console.log('hello')
          // } else {
          //   setPairing({isPairing: false , isPairingError: true,errorMsg:'Invalid symbol.'})
          //   console.log("The string does not include the substring 'sample'",symbol,getListOfSymbols(symbols));
          // }
      }

  },[symbols,symbol,pairing ])

  console.log(pairing)
    return (
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        }}>
          <GlobalStyle />
          <Layout>
            <Form setPairing={(pair,symbol ) => handleCryptoChanges(pair,symbol)} symbols={symbols}/>
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

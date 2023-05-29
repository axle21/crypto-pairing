import { FooterWrapper } from './style';

interface Props {
  isDarkMode: boolean;
}

const Footer = ({ isDarkMode }: Props) => (
  <FooterWrapper backgroundColor={!isDarkMode ? 'white' : '#141414'}>
   
      <p>Powered by </p><img src="https://binance-docs.github.io/apidocs/spot/en/images/logo.svg" height={30} width={100}/>
   
  </FooterWrapper>
);

export default Footer;

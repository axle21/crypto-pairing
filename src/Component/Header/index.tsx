import { HeaderWrapper } from './style';
import { BsSunFill, BsMoon } from 'react-icons/bs';
import { Button } from 'antd';

type Props = {
  isDarkMode: boolean;
  handleClickDarkMode: () => void;
};

const Header = ({ isDarkMode, handleClickDarkMode }: Props) => (
  <HeaderWrapper backgroundColor={!isDarkMode ? 'white' : '#141414'}>
    <div className="logo-section">
      <img src="https://imaxle.vercel.app/_next/image?url=%2Faxle-logo.png&w=96&q=75" height="50px" width="50px" />
      <p>Flowdesk - Examination</p>
    </div>
    <Button type="dashed" icon={isDarkMode ? <BsMoon /> : <BsSunFill />} size="large" onClick={handleClickDarkMode} />
  </HeaderWrapper>
);

export default Header;

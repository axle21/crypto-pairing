import { HeaderWrapper } from "./style";
import { BsSunFill, BsMoon } from "react-icons/bs";
import { Button } from "antd";
import React from "react";

interface Props {
  isDarkMode: boolean;
  handleClickDarkMode: () => void;
}

const Header = ({ isDarkMode, handleClickDarkMode }: Props) => {
  const [showShadow, setShowShadow] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowShadow(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper isDarkMode={isDarkMode} showShadow={showShadow}>
      <div className="logo-section">
        <img
          src="https://imaxle.vercel.app/_next/image?url=%2Faxle-logo.png&w=96&q=75"
          height="50px"
          width="50px"
        />
        <p>Crypto Pairing</p>
      </div>
      <Button
        type="dashed"
        icon={isDarkMode ? <BsMoon /> : <BsSunFill />}
        size="large"
        onClick={handleClickDarkMode}
      />
    </HeaderWrapper>
  );
};

export default Header;

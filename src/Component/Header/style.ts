import styled from "styled-components";
import { Layout } from "antd";

const { Header } = Layout;
interface HeaderWrapperTypes {
  isDarkMode: boolean;
  showShadow: boolean;
  children: React.ReactNode;
}

export const HeaderWrapper: React.FC<HeaderWrapperTypes> = styled(Header)<HeaderWrapperTypes>`
display: flex;
align-items: center;
justify-content: space-between;
background: ${(p) => (!p.isDarkMode ? "white" : "#141414")};
padding: 0 25px;
height: 60px;
position: sticky;
top: 0;
z-index: 1;
box-shadow: ${(p) => p.showShadow && "0 2px 4px rgba(0, 0, 0, 0.1)"};

.logo-section {
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 8px;
    font-weight: 700;
    font-size: 16px;
  }
}
`;
import styled from "styled-components";
import { Layout } from "antd";

const { Header } = Layout;

export const HeaderWrapper = styled(Header)<any>`
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

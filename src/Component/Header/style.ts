import styled from "styled-components";
import { Layout } from 'antd';

const { Header } = Layout;

export const HeaderWrapper = styled(Header)<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(p) => p.backgroundColor};
  padding: 0 25px;
  height: 60px;

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

import styled from "styled-components";
import { Layout } from 'antd';

const { Footer } = Layout;

export const FooterWrapper = styled(Footer)<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.backgroundColor};
`;

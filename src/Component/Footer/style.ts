import styled from "styled-components";
import { Layout } from 'antd';

const { Footer } = Layout;

interface FooterWrapperTypes {
  backgroundColor: string;
  children: React.ReactNode;
}

export const FooterWrapper: React.FC<FooterWrapperTypes> = styled(Footer)<FooterWrapperTypes>`
 
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: ${(p) => p.backgroundColor};
`;

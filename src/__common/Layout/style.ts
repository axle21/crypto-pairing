import Layout from "antd/es/layout";
import styled from "styled-components";

const { Content } = Layout;

interface ContentStyledTypes {
	children: React.ReactNode;
	isDarkMode: boolean
}
  
export const ContentStyled: React.FC<ContentStyledTypes> = styled(Content)<ContentStyledTypes>`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
	min-height: calc(100vh - 107px);
    padding: 25px;
	border-radius: ${(p) => p.isDarkMode ? '#1e1e1e' : ''};

	.back-top {
		height: 40px;
		width: 40px;
		line-height: 40px;
		color: #fff;
		text-align: center;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
	}
`;

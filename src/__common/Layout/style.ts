import Layout from "antd/es/layout";
import styled from "styled-components";

const { Content } = Layout;

export const ContentStyled = styled(Content)`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
	min-height: calc(100vh - 107px);
    padding: 25px;

	.back-top {
		height: 40px;
		width: 40px;
		line-height: 40px;
		border-radius: ${(p) => p.theme.borderRadius};
		background-color: ${(p) => p.theme.primaryColor};
		color: #fff;
		text-align: center;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
	}
`;

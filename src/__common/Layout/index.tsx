import FloatButton from "antd/es/float-button";
import React from "react";
import { ContentStyled } from "./style";

const {BackTop} = FloatButton

interface Props {
	children: React.ReactNode;
	withBackTop?: boolean;
	isDarkMode:boolean;
}

const AppContent: React.FC<Props> = ({ children, isDarkMode, withBackTop = true }: Props) => (
	<ContentStyled isDarkMode={isDarkMode}>
		{children}
		{withBackTop && (
			<BackTop>
				<div className="back-top">UP</div>
			</BackTop>
		)}
	</ContentStyled>
);

export default AppContent;

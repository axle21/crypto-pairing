import BackTop from "antd/es/back-top";
import React from "react";
import { ContentStyled } from "./style";

type Props = {
	children: React.ReactNode;
	withBackTop?: boolean;
	style?: { [key: string]: string };
};

const AppContent: React.FC<Props> = ({ children, style, withBackTop = true }: Props) => (
	<ContentStyled style={{ ...style }}>
		{children}
		{withBackTop && (
			<BackTop>
				<div className="back-top">UP</div>
			</BackTop>
		)}
	</ContentStyled>
);

export default AppContent;

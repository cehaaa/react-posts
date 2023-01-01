import React, { MouseEventHandler } from "react";

export interface ButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children: React.ReactNode;
	isLoading?: boolean;
}

export default ButtonProps;

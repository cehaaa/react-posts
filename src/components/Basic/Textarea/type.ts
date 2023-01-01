import { ChangeEvent } from "react";

export interface TextareaProps {
	onChange: (e: ChangeEvent) => void;
	name: string;
	value: string;
	placeholder: string;
	isRequired?: boolean;
}

export default TextareaProps;

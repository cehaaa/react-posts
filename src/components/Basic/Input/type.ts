import { ChangeEvent } from "react";

export interface InputProps {
	onChange: (e: ChangeEvent) => void;
	value: string;
	name: string;
	placeholder: string;
	isRequired?: boolean;
}

export default InputProps;

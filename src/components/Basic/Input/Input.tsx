import { FC } from "react";

import InputProps from "./type";

const Input: FC<InputProps> = ({
	name,
	value,
	placeholder,
	isRequired = true,
	onChange,
}) => {
	return (
		<input
			name={name}
			type='text'
			placeholder={placeholder}
			className='px-3 py-2.5 w-full rounded-md border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-200 focus:outline-none duration-200'
			value={value}
			onChange={onChange}
			required={isRequired}
		/>
	);
};

Input.propTypes = {};

export default Input;

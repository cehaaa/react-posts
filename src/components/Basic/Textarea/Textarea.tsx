import { FC } from "react";

import TextareaProps from "./type";

const Textarea: FC<TextareaProps> = ({
	name,
	value,
	placeholder,
	isRequired = true,
	onChange,
}) => {
	return (
		<textarea
			name={name}
			placeholder={placeholder}
			className='w-full h-[200px] rounded-md border px-3 py-2.5 border-gray-200 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-200 focus:outline-none duration-200 resize-none'
			onChange={onChange}
			value={value}
			required={isRequired}
		/>
	);
};

export default Textarea;

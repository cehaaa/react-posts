import { FC } from "react";

import ButtonProps from "./type";

import Spinner from "../Spinner/Spinner";

const Button: FC<ButtonProps> = ({ children, isLoading = false, onClick }) => {
	return (
		<button
			type='submit'
			className='px-3 py-2.5 w-full sm:w-fit bg-blue-400 hover:bg-blue-300 duration-200 rounded font-medium text-white flex items-center justify-center space-x-2.5'
			onClick={onClick}>
			<div>{children}</div>
			{isLoading && <Spinner size='small' />}
		</button>
	);
};

export default Button;

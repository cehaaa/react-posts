import { FC } from "react";
import { useContext } from "react";

import ModalContext from "../../context/modalContext";

import Button from "../Basic/Button/Button";

const Navbar: FC = () => {
	const { createPostModal } = useContext(ModalContext);
	const { toogle } = createPostModal;

	return (
		<div className='flex justify-between items-center sticky top-0 w-full sm:w-[500px] mx-auto py-4 px-5 bg-blue-500 mb-3 text-white'>
			<div className='font-serif font-semibold text-xl'>Great Post</div>
			<div>
				<Button onClick={toogle}>Create post</Button>
			</div>
		</div>
	);
};

export default Navbar;

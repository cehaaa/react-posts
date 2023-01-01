import { createContext } from "react";

interface CreatePostModal {
	showModal: boolean;
	toogle: () => void;
}

interface ModalContextProps {
	createPostModal: CreatePostModal;
}

export const ModalContext = createContext<ModalContextProps>({
	createPostModal: {
		showModal: false,
		toogle: () => {},
	},
});

export default ModalContext;

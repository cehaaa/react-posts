import { useState } from "react";

export const useModal = (): [boolean, () => void] => {
	const [showModal, setShowModal] = useState<boolean>(false);

	function toogle(): void {
		setShowModal(!showModal);
	}

	return [showModal, toogle];
};

export default useModal;

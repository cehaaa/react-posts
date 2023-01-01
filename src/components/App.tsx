import Navbar from "./Navbar/Navbar";
import Posts from "./Posts/Posts";

import useModal from "../hooks/useModal";

import ModalContext from "../context/modalContext";

import CreatePost from "./Posts/CreatePost";

function App() {
	const [showModal, toogle] = useModal();

	const createPostModal = {
		showModal,
		toogle: toogle,
	};

	const modalContextValue = {
		createPostModal,
	};

	return (
		<>
			<ModalContext.Provider value={modalContextValue}>
				<CreatePost showModal={showModal} toogle={toogle} />

				<Navbar />

				<Posts />
			</ModalContext.Provider>
		</>
	);
}

export default App;

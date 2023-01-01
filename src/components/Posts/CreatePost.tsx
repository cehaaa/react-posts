import { ChangeEvent, useState } from "react";
import { createPortal } from "react-dom";
import { useAppDispatch } from "../../hooks/hook";

import Post from "../../interfaces/Post";

import postsService from "../../services/postService";

import { createPost } from "../../slices/postsSlices";

import Input from "../Basic/Input/Input";
import Button from "../Basic/Button/Button";
import Textarea from "../Basic/Textarea/Textarea";

interface CreatePostProps {
	showModal: boolean;
	toogle: () => void;
}

export const CreatePost: React.FC<CreatePostProps> = ({
	showModal,
	toogle,
}) => {
	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState(false);

	const initialState: Post = {
		title: "",
		body: "",
	};

	const [post, setPost] = useState<Post>(initialState);
	const [formError, setFormError] = useState<Post>(initialState);

	const handleInput = (e: ChangeEvent) => {
		e.preventDefault();

		const { name, value } = e.target as HTMLInputElement;

		setPost({
			...post,
			[name]: value,
		});
	};

	const validate = () => {
		const errors = {};

		if (!post.title) (errors as Post).title = "Title is required";

		if (!post.body) (errors as Post).body = "Body is required";

		setFormError(errors as Post);

		return Object.keys(errors).length === 0;
	};

	const handleSubmit = async (e: SubmitEvent) => {
		e.preventDefault();

		const isValid = validate();

		if (isValid) {
			setIsLoading(true);

			try {
				const res = await postsService.create(post);
				const data = await res.json();

				dispatch(createPost(data));

				setPost(initialState);

				toogle();
			} catch (err) {
				console.log(err);
			}

			setIsLoading(false);
		}
	};

	const closeModal = () => {
		setPost(initialState);

		toogle();
	};

	if (!showModal) return null;

	return createPortal(
		<div className='fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-gray-200 bg-opacity-40'>
			<div className='bg-white w-full h-screen sm:h-fit p-5 sm:w-5/12 rounded flex items-center flex-col justify-center'>
				<div className='flex justify-between w-full mb-5'>
					<div className='text-xl font-serif font-semibold'>
						Create a Great Post
					</div>
					<div
						className='bg-gray-200 rounded w-7 h-7 cursor-pointer flex items-center justify-center hover:bg-rose-500 hover:text-white duration-200'
						onClick={closeModal}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={2}
							stroke='currentColor'
							className='w-4 h-'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</div>
				</div>
				<form
					className='space-y-5 w-full'
					onSubmit={e => handleSubmit(e as unknown as SubmitEvent)}>
					<div>
						<Input
							name='title'
							value={post.title}
							placeholder='Title'
							onChange={(e: ChangeEvent) => handleInput(e)}
						/>
						<div className='mt-2 text-rose-500'>{formError.title}</div>
					</div>

					<div>
						<Textarea
							name='body'
							value={post.body}
							placeholder="What's on your mind?"
							onChange={(e: ChangeEvent) => handleInput(e)}
						/>

						<div className='mt-2 text-rose-500'>{formError.body}</div>
					</div>

					<Button isLoading={isLoading}>Create a post</Button>
				</form>
			</div>
		</div>,
		document.body
	);
};

export default CreatePost;

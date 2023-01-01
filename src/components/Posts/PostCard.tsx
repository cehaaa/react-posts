import React from "react";

import Post from "../../interfaces/Post";

import postsService from "../../services/postService";

import { removePost } from "../../slices/postsSlices";

import { useAppDispatch } from "../../hooks/hook";

interface PostCardProps {
	post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
	const { id, title, body }: Post = post;

	const dispatch = useAppDispatch();

	const remove = async (id: number) => {
		try {
			const res = await postsService.remove(id);
			const data = await res.json();

			dispatch(removePost(id));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className='px-3 py-2 border rounded-md'>
				<div className='flex w-full justify-between '>
					<div className='w-[300px] sm:w-[400px] text-lg font-medium line-clamp-2'>
						{title}
					</div>
					<div
						className='bg-gray-200 rounded w-7 h-7 cursor-pointer flex items-center justify-center hover:bg-rose-500 hover:text-white duration-200'
						onClick={() => remove(id!)}>
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
				<div className='pt-3 line-clamp-3'>
					<p className='text-gray-500'>{body}</p>
				</div>
			</div>
		</>
	);
};

export default PostCard;

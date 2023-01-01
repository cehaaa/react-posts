import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";

import {
	selectAllPosts,
	selectStatus,
	fetchPosts,
} from "../../slices/postsSlices";

import PostCard from "./PostCard";
import Spinner from "../Basic/Spinner/Spinner";

export const Posts = () => {
	const dispatch = useAppDispatch();

	const posts = useAppSelector(selectAllPosts);
	const postsStatus = useAppSelector(selectStatus);

	useEffect(() => {
		if (postsStatus === "idle") {
			dispatch(fetchPosts());
		}
	}, [dispatch, postsStatus]);

	return (
		<>
			<div className='flex min-h-[300px] w-full sm:w-[500px] mx-auto items-center justify-center'>
				{postsStatus === "loading" ? (
					<Spinner size='medium' />
				) : (
					<div className='space-y-5 pb-5 px-3 md:px-0'>
						{posts?.map((post, index) => {
							return <PostCard key={index + 1} post={post} />;
						})}
					</div>
				)}
			</div>
		</>
	);
};

export default Posts;

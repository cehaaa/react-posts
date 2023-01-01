import Post from "./Post";

interface PostsState {
	posts: Post[];
	status: string;
	error: string | null;
}

export default PostsState;

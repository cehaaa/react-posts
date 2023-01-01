import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Post from "../interfaces/Post";

import { postsService } from "../services/postService";

import type { RootState } from "./slices";

enum Status {
	Idle = "idle",
	Loading = "loading",
	Succeeded = "succeeded",
	Failed = "failed",
}

const initialState = {
	posts: [] as Post[],
	status: Status.Idle,
	error: null as string | null,
};

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		createPost: (state, action) => {
			state.posts.unshift(action.payload);
		},

		removePost: (state, action) => {
			const index = state.posts.findIndex(post => post.id === action.payload);

			state.posts.splice(index, 1);
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchPosts.pending, (state, action) => {
				state.status = Status.Loading;
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.status = Status.Succeeded;
				state.posts = state.posts.concat(action.payload);
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.status = Status.Failed;
				state.error = action.error.message ? action.error.message : null;
			});
	},
});

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
	const response = await postsService.get();
	const data: Post[] = await response.json();

	return data;
});

export const selectAllPosts = (state: RootState) => state.posts.posts;
export const selectStatus = (state: RootState) => state.posts.status;

export const { createPost, removePost } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;

export default postsSlice;

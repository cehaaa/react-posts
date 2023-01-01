import { BASE_URL } from "./api";

import Post from "../interfaces/Post";

export class PostsService {
	async get() {
		const res = await fetch(BASE_URL);
		return res;
	}

	async create(post: Post) {
		const res = await fetch(BASE_URL, {
			method: "POST",
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
			body: JSON.stringify(post),
		});

		return res;
	}

	async remove(id: number) {
		const res = await fetch(`${BASE_URL}/${id}`, {
			method: "DELETE",
		});

		return res;
	}
}

export const postsService = new PostsService();

export default postsService;

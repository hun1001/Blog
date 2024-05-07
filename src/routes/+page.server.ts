import { posts } from '$lib/post'
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
        posts: posts.slice(0, 5)
    };
};


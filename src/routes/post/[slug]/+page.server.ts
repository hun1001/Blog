// import { posts } from '$lib/post'
// import { error } from '@sveltejs/kit';
// import type { PageServerLoad } from './$types';

// export const load : PageServerLoad = async ({ params }) => {

// 	const slug = params.slug;
// 	const post = posts.find((post) => slug.toString() === post.slug);

// 	console.log('slug', post);

// 	if (post) {
// 		return post;
// 	}

// 	error(404, ' found');
// };
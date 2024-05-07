<script lang='ts'>
    import type { PageData } from "./$types";

    export let data : PageData;
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<div>
    <h1>SvelteKit Blog</h1>
    <p class="info">${data.posts.length} posts.</p>

    {#each data.posts as post}
    <a href={`post/${post.slug}`}>
        <h2 class="title">{post.title}</h2>
        <p>{post.preview.text}</p>
    </a>
    {/each}
</div>

<style lang="scss">

    h1 {
        margin-bottom: 0;
    }

    h2.title {
        margin-top: 32px;
        margin-bottom: 0;

        &:hover {
        color: #40b3ff;
        }
    }

    p {
        color: #555;
        margin: 0;
    }

</style>
  
<script lang="ts">
    import { name } from '$lib/info';

    /** @type {import('./$types').PageData} */
    export let data;
    
</script>

<svelte:head>
    <title>{data.post.title} - {name}</title>
    <meta name="description" content={data.post.preview.text} />
    <meta name="author" content={name} />
  
    <!-- Facebook Meta Tags -->
    <!-- <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={data.post.title} />
    <meta property="og:description" content={data.post.preview.text} />
    <meta property="og:image" content={ogImage} /> -->
  
    <!-- Twitter Meta Tags -->
    <!-- <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content={website} />
    <meta property="twitter:url" content={url} />
    <meta name="twitter:title" content={data.post.title} />
    <meta name="twitter:description" content={data.post.preview.text} />
    <meta name="twitter:image" content={ogImage} /> -->
</svelte:head>
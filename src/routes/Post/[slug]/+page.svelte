<script lang='ts'>
  import type { PageData } from './$types';
  import PostDate from '$lib/components/PostDate.svelte';
  import SocialLinks from '$lib/components/SocialLinks.svelte';
  import { bio, name } from '$lib/info';
  import avatar from '$lib/assets/Profile.png';
  import ToC from '$lib/components/ToC.svelte';

  export let data : PageData;

</script>

<svelte:head>
  <title>{data.post.title}</title>
  <meta name="description" content={data.post.preview.text} />
</svelte:head>

<div class="root max-w-2xl mx-auto lg:max-w-none">

  <div class="hidden lg:block pt-8">
    <div class="sticky top-0 w-full flex justify-end pt-11 pr-8">
      
    </div>
  </div>

  <div class="w-full mx-auto overflow-x-hidden">
    <article>
      <header class="flex flex-col">
        <h1
          class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        >
          {data.post.title}
        </h1>
        <PostDate class="text-sm sm:text-base" post={data.post} decorate collapsed />
      </header>

      <!-- render the post -->
      <div class="prose dark:prose-invert ">
        <svelte:component this={data.component} />
      </div>
    </article>

    <!-- bio -->
    <hr />
    <div class="py-8">
      <div class="grid gap-8">
        <div class="flex justify-center order-1 col-span-2 gap-6 md:order-2">
          <SocialLinks />
        </div>
        <div class="flex justify-center order-2 md:order-1 md:col-span-2">
          <a href="/" class="inline-block rounded-full">
            <img
              src={avatar}
              alt={name}
              class="w-24 h-24 mx-auto rounded-full md:w-28 md:h-28 ring-2 ring-zinc-200 dark:ring-zinc-700"
            />
          </a>
        </div>
        <p class="order-3 text-base text-zinc-600 dark:text-zinc-400">
          {bio}
        </p>
      </div>
    </div>
  </div>

  <!-- table of contents -->
  <div class="hidden xl:block pt-10">
    <aside class="sticky hidden w-48 ml-8 xl:block top-8" aria-label="Table of Contents">
      <ToC post={data.post} />
    </aside>
  </div>
</div>

<style lang="postcss">
  .root {
    display: grid;
    grid-template-columns: 1fr;
  }

  @media screen(lg) {
    .root {
      /* 42rem matches max-w-2xl */
      grid-template-columns: 1fr 42rem 1fr;
    }
  }
</style>

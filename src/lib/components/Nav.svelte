<script lang="ts">
  import { name } from '$lib/info';
  import { dev } from '$app/environment';

  export let homeLink : string = dev ? '/' : 'https://hun1001.github.io/Blog';
</script>

<header class="flex items-center justify-between w-full max-w-2xl py-4 mx-auto lg:pb-8">
  <a
    class="text-lg font-bold sm:text-2xl !text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600 dark:to-teal-400"
    href={homeLink}
  >
    {name}'s Blog
  </a>

  <!-- <a 
    class="text-lg sm:text-1xl bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600 dark:to-teal-400" 
    href="{base}/about"
  >
    about
  </a> -->
</header>

<script>
  //import { base } from '$app/paths';
  import { name } from '$lib/info';
</script>

<header class="flex items-center justify-between w-full max-w-2xl py-4 mx-auto lg:pb-8">
  <a
    class="text-lg font-bold sm:text-2xl !text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600 dark:to-teal-400"
    href="/"
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

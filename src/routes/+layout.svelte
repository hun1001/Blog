<script>
    import '../app.css'
    import '../prism.css'
    import GithubCorner from '$lib/components/GithubCorner.svelte';
    import { page } from '$app/stores'
    import Nav from '$lib/components/Nav.svelte';
</script>

<GithubCorner />

<div class="flex flex-col min-h-screen ">
    <div class="flex flex-col flex-grow w-full px-4 py-2">

      <Nav />
      
      <main
        class="flex flex-col flex-grow w-full mx-auto"
        class:max-w-2xl={!$page.data.layout?.fullWidth}
      >
        <slot />
      </main>
    </div>
  </div>
  
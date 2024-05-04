<script>
    import '../app.scss';
    import Nav from '$lib/components/Nav.svelte';
    import GithubCorner from '$lib/components/GithubCorner.svelte';
</script>

<GithubCorner />

<div class="g-app-wrapper">
    <Nav/>
    <slot></slot>
</div>

<style lang="scss">

    .g-app-wrapper {
        max-width: 800px;
        margin: 0 auto;
        padding: 10px;
    }
  
</style>
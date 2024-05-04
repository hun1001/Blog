<svelte:head>
    <title>Home</title>
</svelte:head>

<div>
    <h1>SvelteKit Blog</h1>
    <p class="info">3 posts.</p>

    <a href={`/`}>
        <h2 class="title">제목</h2>
        <p>발췌</p>
      </a>
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
  
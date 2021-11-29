<script context="module">
  export async function load({ fetch }) {
    const { posts } = await fetch("/blog/posts.json")
      .then((res) => res.json());

    return {
      props: {
        posts,
      },
    };
  }
</script>

<script>
  import dayjs from "dayjs";

  export let posts;
</script>

<svelte:head>
  <title>Blog &bullet; jacktrepping</title>
</svelte:head>

<h1 class="title">Blog</h1>
<ul>
  {#each posts as post}
  <li class="list-item">
    <article>
      <div class="meta">
        <span>
          <time datetime="{post.date}">{dayjs(post.date).format("YYYY, MMM DD")}</time>
        </span>
      </div>
      <h2 class="title">
        <a sveltekit:prefetch href="/blog/{post.slug}">{post.title}</a>
      </h2>
    </article>
  </li>
  {/each}
</ul>

<style>
  h1 {
    margin-bottom: 0;
  }

  h2.title {
    margin-top: 16px;
    margin-bottom: 0;
  }

  a {
    color: #ddd;
    border-bottom: 1px solid transparent;
    transition: all .1s ease-in-out;
  }

  a:hover {
    color: #8ea9e4;
    border-color: #8ea9e4;
  }

  time {
    color: #aaa;
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .list-item article {
    display: flex;
    flex-flow: row nowrap;
    align-items: baseline;
  }

  .list-item:first-of-type article h2.title {
    margin-top: 0;
  }

  .meta {
    margin-right: .75em;
  }
  
  .meta span {
    font-size: .95em;
  }
</style>
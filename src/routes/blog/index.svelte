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
  <li class="article-item">
    <article>
      <div class="meta">
        <span>
          <time datetime="{post.date}">{dayjs(post.date).format("YYYY, MMM DD")}</time>
        </span>
      </div>
      <h2 class="article-title">
        <a href="/blog/{post.slug}">{post.title}</a>
      </h2>
    </article>
  </li>
  {/each}
</ul>

<style>
  h1 {
    margin-bottom: 0;
  }

  h2.article-title {
    margin-top: 16px;
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
    color: currentColor;
    transition: color 0.2s ease;
  }

  a:hover {
    color: #bbceee;
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

  .article-item article {
    display: flex;
    flex-flow: row nowrap;
    align-items: baseline;
  }

  .article-item:first-of-type article h2.article-title {
    margin-top: 0;
  }

  .meta {
    margin-right: .75em;
  }
  
  .meta span {
    font-size: .95em;
  }
</style>
<script context="module">
  export async function load({ fetch }) {
    const { posts } = await fetch("/blog/posts.json")
      .then(res => res.json());

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

<img src="/mason.jpg" alt="A person eating pizza" title="not actually me" height="300">
<h1 class="title">Josef's Mediocre Personal Website</h1>

<h2>Posts</h2>
<ul>
{#each posts as post}
  <div class="article-item">
    <article>
      <h2 class="article-title">
        <a class="article-link" href="/blog/{post.slug}">{post.title}</a>
      </h2>
      <div class="meta">
        <span>
          <time datetime="{post.date}">{dayjs(post.date).format("YYYY, MMM DD")}</time>
        </span>
      </div>
    </article>
  </div>
{/each}
</ul>

<style>
  h2.article-title {
    margin-top: 16px;
    margin-bottom: 0;
  }

  a.article-link {
    text-decoration: none;
    color: currentColor;
    transition: color 0.2s ease;
  }

  a.article-link:hover {
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

  .article-item:first-of-type article h2.article-title {
    margin-top: 0;
  }
  
  .meta span {
    font-size: .95em;
  }
</style>

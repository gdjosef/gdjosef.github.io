<!-- <script context="module">
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
</script> -->

<svelte:head>
  <title>jacktrepping</title>
</svelte:head>

<h1 class="title">Josef's Mediocre Personal Website</h1>
<p>Hi, I'm Josef. I'm a wannabe programmer and web/software developer. See the links in the navigation bar above to check some more stuff out. Or not. I'm not your parents.</p>
<p>You could follow me on Twitter too (<a href="https://twitter.com/jacktrepping">@jacktrepping</a>). I don't post a lot about my small dev logs on there. I might just make a sh**ty remake of Twitter by making a microblogging part on this site so no one has to see the more boring part of my profile (the normal boring part is my profile).</p>
<p>Pretty much it. If you don't wanna stay on this site, here's a link to <a href="https://duckduckgo.com">DuckDuckGo</a>.</p>

<!-- <div>
  {#each posts as post}
    <article>
      <h2 class="title">{post.title}</h2>
      <time datetime="{post.date}">{dayjs(post.date).format("YYYY, MMM DD")}</time>
    </article>
  {/each}
</div>

<style>
  h2.title {
    margin-bottom: 0;
  }
</style> -->
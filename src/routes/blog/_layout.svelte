<script>
  import dayjs from "dayjs";

  export let title, date;
</script>

<svelte:head>
  <title>{title} &bullet; jacktrepping</title>
</svelte:head>

<article>
  <h2 class="title">{title}</h2>
  <em><time datetime="{date}">{dayjs(date).format("YYYY, MMM DD")}</time></em>
  <slot></slot>
</article>

<style>
  h2.title {
    margin-bottom: 0;
  }

  h2.title::after {
    content: '';
    display: block;
    width: 30%;
    height: .075em;
    background-color: #e14f7f;
    margin: .75rem 0;
  }

  time {
    color: #aaa;
  }
</style>
<script>
  import "../app.css";
  import Nav from "$lib/Nav.svelte";
</script>

<svelte:head>
  <title>jacktrepping</title>
</svelte:head>

<div class="wrapper">
  <Nav />
  <div>
    <slot></slot>
  </div>
</div>

<style>
  .wrapper {
    max-width: 800px;
    margin: 0 auto;
    padding: 10px;
  }
</style>
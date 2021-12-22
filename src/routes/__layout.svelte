<script>
  import Nav from "$lib/Nav.svelte";
  import "../app.css";
</script>

<div class="container">
  <a class="skip-nav" href="#main-content">
    skip to main content
  </a>
  <Nav />
  <main id="main-content">
    <slot></slot>
  </main>
</div>

<style>
  .container {
    max-width: 650px;
    margin: 0 auto;
    padding: 10px;
  }
</style>
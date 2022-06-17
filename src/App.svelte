<script>
  import Production from "./lib/Production.svelte";
  import { cash } from "./stores.js";


  const nav_list = [
    Production,
  ];

  let nav_index = 0;
</script>

<main>
  <nav>
    <h1 id="cash-txt">${$cash}</h1>
    <h2>Production</h2>
    <h2>Other Nav 1</h2>
    <h2>Other Nav 2</h2>
    <h2>Other Nav 3</h2>
  </nav>
  <svelte:component this={nav_list[nav_index]}/>
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    background-color: #10111a;
    display: grid;
    grid-template-columns: max-content 1fr;
  }
  nav {
    color: white;
    border-right: 4px solid #1e1f28;
    /* padding: 0.8rem 0; */
  }
  nav h1 {
    padding: 1rem;
    border-bottom: 2px solid #2e2a21;
  }
  nav h2 {
    padding: 1.2rem 2rem;
    cursor: pointer;
    /* margin-top: 5px; */
  }
  nav h2:hover {
    background-color: #2e2a21;
  }
</style>

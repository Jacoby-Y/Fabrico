<script>
  import { cash } from "../stores.js";

  const tps = 15;

  const resource_loop = setInterval(() => {
    for (let i = 0; i < resources.length; i++) {
      const res = resources[i];
      tick_res(res);
    }
  }, 1000/tps);

	const res_info = {
		Coal: { power: 0, value: 1, interval: 1 },
		Iron: { power: 2, value: 3, interval: 3 },
		Steel: { power: 8, value: 10, interval: 5 },
		Filler: { power: -1, value: -5, interval: 0.00001 },
	}
	let resources = [
		{ name: "Coal", eff: 1, prog: 0, stored: 0 },
		{ name: "Iron", eff: 0, prog: 0, stored: 0 },
		{ name: "Steel", eff: 0, prog: 0, stored: 0 },
	];

  const click_res = (res)=>{
    if (res.eff == 0) return;
    res.prog = (res.prog + 10)%100
    // console.log(res);
    resources = resources;
  }
  const tick_res = (res)=>{
    if (res.eff == 0) return;
    const info = res_info[res.name];
    res.prog += 100/tps/info.interval;
    if (res.prog >= 100) {
      res.prog = 0;
      res.stored += res.eff;
    }
    // console.log(res);
    resources = resources;
  }
</script>

<main>
	{#each resources as res }
		<div class="resource-card">
			<h3 style="font-size: 1.5rem;">{res.name}</h3>
      {#if res.eff > 0}
        <div on:click={()=> click_res(res)} class="progress" style="background-image: conic-gradient(#f3373a {res.prog}%, #2a343a 0);">
          <div class="center">{Math.round(res.prog)}%</div>
        </div>
        <div class="res-eff">
          <h3>{res.eff}</h3> <hr style="border: 1.5px solid #2a343a;">
          <h3>{res_info[res.name].interval} Sec{res_info[res.name].interval == 1 ? "" : "s"}</h3>
        </div>
        <h3 class="stored" on:click={()=>{ res.stored--; $cash++; }}>{res.stored}</h3>
      {:else}
        <button class="unlock-btn">Unlock ($50)</button>
      {/if}
		</div>
	{/each}

</main>

<style>
  main {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: repeat(3,1fr);
    gap: 1rem;
  }
	.resource-card {
    color: white;
    background-color: #181c1f;
    padding: 1rem 1.2rem;
    border-radius: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content 1fr max-content;
    text-align: center;
    align-items: center;
    justify-items: center;
    position: relative;
    overflow: hidden;
  }
  .resource-card .stored { 
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #343c42;
    border-top-left-radius: 10px;
    padding: .8rem 1rem;
  }
  .resource-card .res-eff h3 {
    padding: 0.3rem;
  }
  .resource-card .unlock-btn {
    padding: 1rem 1.2rem;
    font-size: 1.2rem;
    color: white;
    background-color: #343c42;
    border: none;
  }
  .resource-card .unlock-btn:hover {
    opacity: 0.8;
  }
  .progress {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
  }
  .progress .center {
    position: absolute;
    left: 50%; top: 50%; 
    transform: translate(-50%, -50%);
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background-color: #181c1f;
    font-size: 1.3rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .progress:hover > .center {
    background-color: #21272c;
  }
</style>
<script>
	import { cash, res_info } from "../stores.js";

	export let res = null;
	export let info = null;
	export let updateRes = ()=>{};

  const clickRes = (res)=>{
    if (res.eff == 0) return;
    res.prog += 10;
    // console.log(res);
    updateRes();
  }
  const unlockRes = (res)=>{ // info.unlock_cost
    if ($cash < info.unlock_cost) return;
    $cash -= info.unlock_cost;  
    res.eff = 1;
    updateRes();
  }

	let menu_open = false;

	let sell_index = 0;

	const sell_amount = [ 1, 10, 100, 1000, "All" ];

</script>

<main>
	<div class="resource-card" class:hidden={menu_open}>
		<h3 style="font-size: 1.5rem;">{res.name}</h3>
		{#if res.eff > 0}
			<div on:click={()=> clickRes(res)} class="progress" style="background-image: conic-gradient(#f3373a {res.prog}%, #2a343a 0);">
				<div class="center">{Math.round(res.prog)}%</div>
			</div>
			<div class="res-eff">
				<h3>{res.eff}</h3> <hr style="border: 1.5px solid #2a343a;">
				<h3>{info.interval} Sec{info.interval == 1 ? "" : "s"}</h3>
			</div>
		{:else}
			<button class="unlock-btn" on:click={()=> unlockRes(res)}>Unlock (${info.unlock_cost})</button>
		{/if}
	</div> 
	
	<menu class:hidden={!menu_open}>
    <h1>Sell: {sell_amount[sell_index]}</h1>
		<input type="range" id="sell-range" min="0" max="4" bind:value={sell_index}/>
  </menu>

	{#if res.eff > 0}
    <h3 class="stored">{res.stored}</h3>
	  <h3 class="value">${info.value}</h3>
	  <h3 on:click={()=> void(menu_open = !menu_open)} class="other" class:open={menu_open}>+</h3>
  {/if}
</main>

<style>
	main {
    color: white;
    background-color: #181c1f;
    padding: 1rem 1.2rem;
    border-radius: 1rem;
		position: relative;
		overflow: hidden;
  }
  menu {
    display: grid;
    align-content: center;
    height: 100%;
  }
	.resource-card {
		width: 100%;
		height: 100%;
		display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content 1fr max-content;
    align-items: center;
    justify-items: center;
	}
  .stored { 
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #343c42;
    border-top-left-radius: 10px;
    padding: .8rem 1rem;
  }
  .value { 
    position: absolute;
    top: 0;
    left: 0;
    background-color: #534225;
    border-bottom-right-radius: 10px;
    padding: .8rem 1rem;
  }
  .other { 
    position: absolute;
    top: .5rem;
    right: .5rem;
    color: #d46f00;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 50%;
    padding: .2rem .6rem;
    transition-duration: .3s;
  }
	.open {
    transform: rotate(45deg);
  }
  .res-eff h3 {
    padding: 0.3rem;
  }
  .unlock-btn {
    padding: 1rem 1.2rem;
    font-size: 1.2rem;
    color: white;
    background-color: #343c42;
    border: none;
  }
  .unlock-btn:hover {
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
	.hidden {
    display: none;
  }
</style>
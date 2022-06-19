<script>
  import ResourceCard from "./ResourceCard.svelte";
  import { cash, resources, tps, res_info } from "../stores.js";
  import { onDestroy } from "svelte";

  const resource_loop = setInterval(() => {
    for (let i = 0; i < $resources.length; i++) {
      const res = $resources[i];
      tickRes(res);
    }
  }, 1000/tps);
  onDestroy(()=>{ window.clearInterval(resource_loop); }); 

  const updateRes = ()=> $resources = $resources;
  const getRes = (name) => $resources.find(v => v.name == name);

	const tickRes = (res)=>{
    if (res.eff == 0) return;
    res.prog += 100/tps/res_info[res.name].interval;
    if (res.prog >= 100) {
      gainRes(res);
    }
    updateRes();
  }
  const gainRes = (res)=>{
    const info = res_info[res.name];
    res.prog = 0;
    for (let i = 0; i < info.req.length; i++) {
      const [name, num] = info.req[i];
      const req_res = getRes(name);
      if (req_res.stored < num) return;
      req_res.stored -= num;
    }
    res.stored += res.eff;
  }
</script>

<main>
	{#each $resources as res }
		<ResourceCard res={res} info={res_info[res.name]} updateRes={updateRes}/>
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
</style>
import { writable } from "svelte/store";

export const cash = writable(10000000);
export const tps = 15;

export const res_info = {
	Coal: { power: 0, value: 1, interval: 1, req: [] },
	Iron: { unlock_cost: 50, power: 2, value: 3, interval: 3, req: [] },
	Steel: { unlock_cost: 50, power: 8, value: 10, interval: 5, req: [["Coal", 1], ["Iron", 1]] },
	Filler: { unlock_cost: 50, power: -1, value: -5, interval: 0.00001, req: [] },
};
export const resources = writable([
	{ name: "Coal", eff: 1, prog: 0, stored: 0 },
	{ name: "Iron", eff: 0, prog: 0, stored: 0 },
	{ name: "Steel", eff: 0, prog: 0, stored: 0 },
]);
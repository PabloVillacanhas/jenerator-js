export function* randomNumber(min: number, max: number) {
	while (true) {
		yield min + Math.random() * max;
	}
}

export function* randomString(length: number = 10) {
	while (true) {
		yield Math.random().toString(36).slice(length);
	}
}

export  function* randomFrom(items: Array<string | number | boolean>){
	while (true) {
		yield items[Math.floor(Math.random() * items.length)] as string | number;
	}
}

export function* id() {
	let id = 1;
	while (true) {
		yield id++;
	}
}

export const randomizers = {
	randomNumber, randomString, randomFrom, id
}
/**
 * @returns string in format YYYY-MM-DDT00:00:00Z'
 */
export function* randomDateWithZ() {
	while (true) {
		yield ['2022-07-18T02:16:06Z', '2022-08-18T02:16:06Z', '2022-09-18T02:16:06Z'][
			Math.floor(Math.random() * 2)
		] as string;
	}
}
/**
 * @returns string in format YYYY-MM-DDT00:00:00'
 */
export function* randomDate() {
	while (true) {
		yield [
			'2020-12-31T00:00:00',
			'2021-04-21T00:00:00',
			'2021-04-22T00:00:00',
			'2021-04-30T00:00:00',
		][Math.floor(Math.random() * 3)] as string;
	}
}

export function* randomNumber(min: number, max: number) {
	while (true) {
		yield min + Math.random() * max;
	}
}

export function* randomString(length: number = 10) {
	while (true) {
		console.log('Math.random()', Math.random())
		yield Math.random().toString(36).slice(length);
	}
}

export const randomFrom = (items: Array<string | number | boolean>): string | number =>
	items[Math.floor(Math.random() * items.length)] as string | number;

export function* id() {
	let id = 1;
	while (true) {
		yield id++;
	}
}

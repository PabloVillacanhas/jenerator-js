import { MockBuilder } from './index';
import { id, randomFrom, randomNumber, randomString } from './randomizers';

//create a test that describe how object should be generate
describe('Object generated', () => {
	const object: {
		id: number;
		a: number;
		b: { c: number; d: number };
		e: number;
		f: number | null;
		g: any
	}[] = MockBuilder(4, {
		id: id(),
		a: randomNumber(0, 10000),
		b: {
			c: randomNumber(0, 300),
			d: randomString(),
		},
		e: 4,
		f: null,
		g: randomFrom(["u",6,"juja"])
	});
	it('Generates 4 objects', () => {
		expect(object).toHaveLength(4);
	});
	it('Generates an object with two fields, a and b with number and object types', () => {
		console.log('object', object);
		expect(typeof object[0]?.a).toBe('number');
		expect(typeof object[0]?.b.c).toBe('number');
		expect(typeof object[0]?.b.d).toBe('string');
		expect(object[0]?.f).toBeNull();
	});
	it('Expect all values of object being different', () => {
		expect(object[0]?.a !== object[1]?.a).toBe(true);
		expect(object[0]?.b.c !== object[1]?.b.c).toBe(true);
		expect(object[0]?.b.d !== object[1]?.b.d).toBe(true);
	});
	it('Expect all literals being the same', () => {
		expect(object[0]?.e === object[1]?.e).toBe(true);
	});
	it('Expect all ids be different and separate by 1', () => {
		expect(object[1]?.id).toBe(object[0]?.id! + 1);
	});
});


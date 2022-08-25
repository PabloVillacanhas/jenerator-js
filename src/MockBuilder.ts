type Generable<_T> = {
	[key: string]: GeneratorFunction | string | number | object | null;
};

export const 	MockBuilder: <T>(numInstances: number, objectGen: Generable<T>) => Array<T> & T = (
	numInstances: number,
	objectGen: any,
) => {
	const mocks: typeof objectGen = [];
	for (let i = 0; i < numInstances; i++) {
		let mock: typeof objectGen = {};
		for (const field in objectGen) {
			let value;
			if (objectGen[field] === null) {
				value = null;
			} else if (objectGen[field].constructor.constructor.name === 'GeneratorFunction') {
				value = objectGen[field].next().value;
			} else if (objectGen[field] instanceof Object) {
				value = MockBuilder(1, objectGen[field])[0]!;
			} else {
				value = objectGen[field];
			}
			mock = {
				...mock,
				[field]: value,
			};
		}
		mocks.push(mock);
	}
	return mocks;
};
import { faker } from '@faker-js/faker';

const getEvents = Array(100).map(() => ({
	sid: faker.random.alpha({ count: 3, casing: 'upper' }),
	start: faker.date.past(),
	end: faker.date.past(),
	srcDb: faker.database.collation(),
	srcSize: faker.random.numeric(3),
	targetDb: faker.database.collation(),
	targetSize: faker.random.numeric(3),
	type: ['Update', 'Upgrate', 'Conversion'][Math.floor(Math.random() * 3)],
}));

const getEvent = {
	// TODO
};

export { getEvents, getEvent };

import { defineConfig } from 'orval';

export default defineConfig({
	catfacts: {
		output: {
			mode: 'tags-split',
			target: 'src/server/requests.ts',
			schemas: 'src/server/model',
			client: 'react-query',
			mock: false,
			override: {
				mutator: {
					path: './src/utils/backendRequest.ts',
					name: 'backendRequest',
				},
			},
		},
		input: './catfacts.json',
		hooks: {
			afterAllFilesWrite: ['prettier --write', 'eslint --fix'],
		},
	},
});

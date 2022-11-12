// @ts-expect-error
import { registerI18nLoader } from '@ui5/webcomponents-base/dist/asset-registries/i18n.js';
// @ts-expect-error
import parse from '@ui5/webcomponents-base/dist/PropertiesFileFormat.js';

const loadLocalizations = (localizations: Array<{ lang: string; path: string }>) =>
	localizations.forEach(({ lang, path }) =>
		registerI18nLoader('myApp', lang, async () => {
			const props = await (await fetch(path)).text();
			return parse(props); // this call is required for parsing the properties text
		}),
	);

export default loadLocalizations;

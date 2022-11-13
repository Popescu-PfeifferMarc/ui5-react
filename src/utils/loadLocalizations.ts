// @ts-expect-error
import { registerI18nLoader } from '@ui5/webcomponents-base/dist/asset-registries/i18n.js';

import '@ui5/webcomponents-icons/dist/Assets.js';
import '@ui5/webcomponents-fiori/dist/Assets.js';

const loadLocalizations = (appName: string) =>
	['de', 'en'].forEach((lang) =>
		registerI18nLoader(appName, lang, async () => import(`../assets/i18n/messagebundle_${lang}.json`)),
	);


export default loadLocalizations;

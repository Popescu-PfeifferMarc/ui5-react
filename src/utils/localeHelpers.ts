// @ts-expect-error missing type definitions
import { registerI18nLoader } from '@ui5/webcomponents-base/dist/asset-registries/i18n.js';
import { useI18nBundle } from '@ui5/webcomponents-react-base';

import '@ui5/webcomponents/dist/Assets.js';
import '@ui5/webcomponents-fiori/dist/Assets.js';
import '@ui5/webcomponents-icons/dist/Assets.js';
import '@ui5/webcomponents-react/dist/Assets.js';

const APP_NAME = 'ui5-react-test';

const loadLocalizations = () =>
	['de', 'en'].forEach((lang) =>
		registerI18nLoader(APP_NAME, lang, async () => import(`../assets/i18n/messagebundle_${lang}.json`)),
	);

const useLocale = () => useI18nBundle('myApp');

export { loadLocalizations, useLocale };

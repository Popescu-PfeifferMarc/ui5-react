// @ts-expect-error
import { registerI18nLoader } from '@ui5/webcomponents-base/dist/asset-registries/i18n.js';
//@ts-ignore
import { useI18nBundle } from '@ui5/webcomponents-react-base';

import '@ui5/webcomponents/dist/Assets.js';
import '@ui5/webcomponents-fiori/dist/Assets.js';
import '@ui5/webcomponents-icons/dist/Assets.js';
import '@ui5/webcomponents-react/dist/Assets.js';

const APP_NAME = 'myApp';

const loadLocalizations = () =>
	['de', 'en'].forEach((lang) =>
		registerI18nLoader(APP_NAME, lang, async () => import(`../assets/i18n/messagebundle_${lang}.json`)),
	);

const useLocale = () => useI18nBundle('myApp');

export { loadLocalizations, useLocale };

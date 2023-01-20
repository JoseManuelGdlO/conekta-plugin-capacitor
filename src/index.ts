import { registerPlugin } from '@capacitor/core';

import type { ConektaPlugin } from './definitions';

const Conekta = registerPlugin<ConektaPlugin>('Conekta', {
  web: () => import('./web').then(m => new m.ConektaWeb()),
});

export * from './definitions';
export { Conekta };

import { WebPlugin } from '@capacitor/core';

import type { ConektaPlugin } from './definitions';

export class ConektaWeb extends WebPlugin implements ConektaPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

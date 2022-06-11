'use strict';

import { Service } from 'node-windows';
import { userInfo } from 'node:os';

const { username } = userInfo();

const svc = new Service({
  name: 'Gamedac audio fix',
  description: 'Fixes the Gamedac by configuring a VAC.',
  script: `C:\\users\\${username}\\Desktop\\audio_fix.mjs`
});

svc.on('install', () => svc.start());

svc.install();

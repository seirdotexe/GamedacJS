'use strict';

import { promisified as regedit } from 'regedit';
import { writeFile } from 'node:fs/promises';

const path = [
  'HKLM', 'SYSTEM', 'ControlSet001', 'Services',
  'VirtualAudioCable_83ed7f0e-2028-4956-b0b4-39c76fdaef1d',
  'Parameters', 'Cable 1'
].join('\\');
const VACValues = (await regedit.list(path))[path].values;
const config = {};

for (const key in VACValues) {
  const { value } = VACValues[key];

  if (value === 0 || value === 1) {
    config[key] = Boolean(value);
  } else {
    config[key] = value;
  }
}

await writeFile('vac_config.json', JSON.stringify(config, null, 2));

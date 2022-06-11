'use strict';

import LoopedBack from 'looped-back';

const looped = new LoopedBack();

if (looped.isInitialized()) {
  const VACMicrophone = looped.getDevices(LoopedBack.DEVICE_CAPTURE)
    .find(({ name }) => name === 'Line 1 (Virtual Audio Cable)');
  const VACSpeaker = looped.getDevices(LoopedBack.DEVICE_RENDER)
    .find(({ name }) => name === 'Line 1 (Virtual Audio Cable)');

  const DACMicrophone = looped.getDevices(LoopedBack.DEVICE_CAPTURE)
    .find(({ name }) => name === 'Microphone (GameDAC Chat)');
  const DACSpeaker = looped.getDevices(LoopedBack.DEVICE_RENDER)
    .find(({ name }) => name === 'Speakers (GameDAC Game)');

  looped.setLoopback(VACMicrophone.id, DACSpeaker.id); //? DAC speaker loops to VAC microphone
  looped.setDefaultEndpoint(VACMicrophone.id, LoopedBack.ROLE_CONSOLE); //? VAC microphone as default device
  looped.setDefaultEndpoint(DACMicrophone.id, LoopedBack.ROLE_COMMUNICATION); //? DAC microphone as default coms device

  looped.setDefaultEndpoint(VACSpeaker.id, LoopedBack.ROLE_CONSOLE); //? VAC speaker as default device
  looped.setDefaultEndpoint(VACSpeaker.id, LoopedBack.ROLE_COMMUNICATION); //? VAC speaker as default coms device

  looped.destroy();
}

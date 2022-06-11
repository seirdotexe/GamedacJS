# GamedacJS

Fixes for the Gamedac written in Node.js.

# Requirements

* Read the [guide](https://github.com/seirdotexe/Steelseries-Gamedac-fixes)
* Windows Build tools
* Node v18
* `npm i looped-back regedit node-windows`
* [VAC](https://vac.muzychenko.net/en/index.htm)
* [SoundSwitch](https://soundswitch.aaflalo.me/)

# Information

### audio_fix

This script defaults the VAC audio devices. Why? Because everytime you restart Windows or finish a system update, Windows resets your audio manager.

### install_audio_fix

This script installs `audio_fix` as a service.

### audio_vac_getter

This script retrieves settings of VAC and saves it as JSON.

# Credits

This beautiful fix wouldn't have been possible without the amazing package [looped-back](https://github.com/HelloWorld017/looped-back). I hereby thank them dearly for their work.

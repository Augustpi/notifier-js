

import ok from '../assets/audios/ok.ogg'
import atention from '../assets/audios/atention.ogg'
import dinng from '../assets/audios/dinng.ogg'
import start from '../assets/audios/start.ogg'
import warning from '../assets/audios/warning.ogg'
import tink from '../assets/audios/tink.ogg'

// Sounds
export const sound = {
  ok: ok,
  atention: atention,
  dinng: dinng,
  start: start,
  warning: warning,
  tink: tink
}

/**
 * Play selected sound file.
 * @param {File} music You can select one in sound object property
 */
export const play = ({ music = sound.ok }) => {
  const audio = new Audio(music)

  audio.play()
}


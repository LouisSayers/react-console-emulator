export const createKey = (keymap) => {
  const alt = Boolean(keymap.alt)
  return `${alt}, ${keymap.key}`
}

export const keyFromEvent = (event) => {
  return createKey({
    alt: event.altKey,
    key: event.key
  })
}

export const createKeymap = (keymapArr = []) => {
  return keymapArr.reduce((obj, keymap) => {
    obj[createKey(keymap)] = keymap
    return obj
  }, {})
}

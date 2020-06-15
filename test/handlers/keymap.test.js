/* eslint-disable no-undef, no-unused-vars */

import { createKey, keyFromEvent, createKeymap } from '../../src/handlers/keymap'

describe('#createKey', () => {
  it('creates a key from keymap', () => {
    const keymap = { alt: true, key: '∆', fn: () => null }
    expect(createKey(keymap)).toBe('true, ∆')
  })
})

describe('#keyFromEvent', () => {
  it('creates a key from KeyboardEvent', () => {
    const event = { altKey: true, key: '∆' }
    expect(keyFromEvent(event)).toBe('true, ∆')
  })
})

describe('#createKeymap', () => {
  it('creates an object from array', () => {
    const keymap1 = { alt: true, key: '∆', fn: () => null }
    const keymap2 = { alt: false, key: 'x', fn: () => null }

    const keymap1Key = createKey(keymap1)
    const keymap2Key = createKey(keymap2)
    const result = createKeymap([keymap1, keymap2])
    const expectedResult = {
      [keymap1Key]: keymap1,
      [keymap2Key]: keymap2
    }

    expect(result).toMatchObject(expectedResult)
  })
})

import { createDeck } from '../utils/deck'

import { SPELL_MODEL, SPELL_CARDS, STARTING_DECK } from './constants'

export const state = {
    draw: createDeck(SPELL_MODEL, SPELL_CARDS, STARTING_DECK),
    discard: [],
    hand: []
}
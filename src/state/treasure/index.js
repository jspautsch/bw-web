import { createDeck } from '../utils/deck'

import { TREASURE_MODEL, TREASURE_CARDS, STARTING_DECK } from './constants'

export const state = {
    draw: createDeck(TREASURE_MODEL, TREASURE_CARDS, STARTING_DECK),
    discard: [],
    hand: []
}
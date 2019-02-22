export function createDeck (cardModel, cardTypes, cardCounts) {
    const deck = []

    for (c in cardCounts) {
        const num = cardCounts[c]
        for (let i = 0; i < num; i++) {
            const card = {
                ...cardModel,
                ...cardTypes[c]
            }
            deck.push(card)
        }
    }

    return deck
}
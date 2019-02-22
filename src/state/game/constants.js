export const TOKENS_TO_WIN = 2

// Phases
const CREATE_PLAYERS = 'createPlayers'
const PLAY_ROUND = 'playRound'
const GAME_OVER = 'gameOver'

// Round
const DRAW_SPELLS = "drawSpellCards"
const CREATE_SPELL = "createSpell"
const DETERMINE_TURN_ORDER = "determineTurnOrder"
const RESOLVE_TURN = "resolveTurn"

// Turn
const DRAW_FOR_WILDS = "drawForWilds"
const RESOLVE_SOURCES = 'resolveSources'
const RESOLVE_QUALITIES = 'resolveQualities'
const RESOLVE_DELIVERIES = 'resolveDeliveries'

export const PHASES = {
    CREATE_PLAYERS,
    PLAY_ROUND,
    GAME_OVER,
    DRAW_SPELLS,
    CREATE_SPELL,
    DETERMINE_TURN_ORDER,
    RESOLVE_TURN,
    DRAW_FOR_WILDS,
    RESOLVE_SOURCES,
    RESOLVE_QUALITIES,
    RESOLVE_DELIVERIES
}

// might not need this, but helped me visualize things
export const PHASE_ORDER = [
    CREATE_PLAYERS,
    {
        phase: PLAY_ROUND,
        loop: [
            DRAW_SPELLS,
            CREATE_SPELL,
            DETERMINE_TURN_ORDER,
            {
                phase: RESOLVE_TURN,
                loop: [
                    DRAW_FOR_WILDS,
                    RESOLVE_SOURCES,
                    RESOLVE_QUALITIES,
                    RESOLVE_DELIVERIES
                ]
            }
        ]
    },
    GAME_OVER
]
export namespace IBattleInterface {
    export interface Battle {
        prefixes?: {
            player?: string,
            enemy?: string
        },
        templates?: {
            startOfTurnStaminaRegen?: string,
            startOfTurnManaRegen?: string,
            commands?: string,
            restedAndRestoredStamina?: string,
            restedAndRestoredMana?: string,
            fled?: string,
            fled2?: string,
            fled3?: string,
            unableToRun?: string,
            unableToRun2?: string,
            defeatedPlayer?: string,
            defeatedEnemy?: string
        }
    }
}
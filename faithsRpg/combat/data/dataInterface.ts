export namespace ICombatInterface {
    export interface Combat {
        entityValues?: {
            health?: number,
            stamina?: number,
            mana?: number
        },
        stats?: {
            strength?: number,
            archery?: number,
            magic?: number,
            defense?: number,
            dexterity?: number,
            composure?: number,
            criticalHitChance?: number
        }
        criticalHitMultiplier?: number


    }
}
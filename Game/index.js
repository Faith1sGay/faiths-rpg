import { gameInterface } from './interface/data/dataLoader.js'
import { gameCombat } from './combat/data/dataLoader.js'
import { startUp } from './startup/startUp.js'
export function Game () {
  const game = ({
    inputPrompt: gameInterface.inputPrompt,
    formsOfTrue: gameInterface.formsOfTrue.toString(),
    formsOfFalse: gameInterface.formsOfFalse.toString(),
    unacceptableInputMessages: {
      getBoolInput: gameInterface.unacceptableInputMessages.getBoolInput.toString(),
      getIntInput: gameInterface.unacceptableInputMessages.getIntInput.toString(),
      getCommand: gameInterface.unacceptableInputMessages.getCommand.toString()
    }
  })
  console.log(game)
  const e = ({
    entityValues: {
      health: gameCombat.entityValues.health,
      stamina: gameCombat.entityValues.stamina,
      mana: gameCombat.entityValues.mana
    },
    stats: {
      strength: gameCombat.stats.strength,
      archery: gameCombat.stats.archery,
      magic: gameCombat.stats.magic,
      defense: gameCombat.stats.defense,
      dexterity: gameCombat.stats.dexterity,
      composure: gameCombat.stats.composure,
      criticalHitChance: gameCombat.stats.criticalHitChance
    },
    criticalHitMultiplier: gameCombat.criticalHitMultiplier
  })
  console.log(e)
}
startUp().then(Game()).catch(error => console.log(error))

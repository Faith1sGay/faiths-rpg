import hidefile from 'hidefile'
import fs from 'fs'
export function startUp () {
  fs.writeFileSync('./ADMIN.ini', 'USER=FAITH\nPASSWORD=CHICKENNUGGET\nGODMODE=TRUE\n; I might use this file sometime, I\'m thinking of using it for like idfk, like cheatcodes?')
  fs.writeFileSync('./battle/data/data.yml', 'prefixes:\n   player: "You"\n   enemy: "The enemy"\ntemplates: {\n   startOfTurnStaminaRegen: "restored {} stamina.",\n   startOfTurnManaRegen: "restored {} mana.",\n   commands: "can {}.",\n   restedAndRestoredStamina: "rested and restored {} stamina",\n   restedAndRestoredMana: "rested and restored {} mana.",\n   fled: "successfully fled from the enemy",\n   fled2: "really? You\'re gonna run? Okay.",\n   fled3: "ran all the way home and hid from the big scary monster.",\n   unableToRun: "tried lol.",\n   unableToRun2: "attempted to run but got caught and brought back into the fight",\n   defeatedPlayer: "blacked out and woke up in the enemy\'s lair",\n   defeatedEnemy: "won!"\n}')
  fs.writeFileSync('./combat/data/data.yml', 'entityValues:\n   health: 100,\n   stamina: 100\n   mana: 100\n\nstats: \n strength: 100\n archery: 100\n magic: 100\n defense: 100\n dexterity: 100\n composure: 100\n criticalHitChance: 3\n\ncriticalHitMultiplier: 1.5')
  fs.writeFileSync('./interface/data/data.yml', 'inputPrompt: ">>> "\nformsOfTrue:\n - yes\n - y\nformsOfFalse:\n - no\n - n\nunacceptableInputMessages:\n getBoolInput: "You must enter yes or no (y/n)."\n getIntInput: "You must enter a whole number between 1 and 18000."\n getCommand: "You must enter a valid command."')
  hidefile.hideSync('./ADMIN.ini')
  console.log('DONE')
}

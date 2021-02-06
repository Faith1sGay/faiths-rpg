import { gameData} from './interface/data/dataLoader.js'
import { IData } from './interface/data/dataInterface'
const game : IData.Data = ({
    inputPrompt: gameData.inputPrompt,
    formsOfTrue: gameData.formsOfTrue.toString(),
    formsOfFalse: gameData.formsOfFalse.toString(),
    unacceptableInputMessages: {
        getBoolInput: gameData.unacceptableInputMessages.getBoolInput.toString(),
        getIntInput: gameData.unacceptableInputMessages.getIntInput.toString(),
        getCommand: gameData.unacceptableInputMessages.getCommand.toString()
    }
})
console.log(game)
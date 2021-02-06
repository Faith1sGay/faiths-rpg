import YAML from 'yaml'
import * as Paths from 'path'
import * as fs from 'fs'
// import { IData } from '../data/dataInterface'

const data = fs.readFileSync(Paths.resolve('./interface/data/data.yml'))
export const gameData = YAML.parse(data.toString())
/* export const gameInterface: IData.Data = {
    inputPrompt: e.inputPrompt,
    formsOfTrue: e.formsOfTrue.toString(),

}
*/

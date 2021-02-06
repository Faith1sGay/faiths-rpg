import YAML from 'yaml'
import * as Paths from 'path'
import * as fs from 'fs'
const data = fs.readFileSync(Paths.resolve('./battle/data/data.yml'))
export const gameBattle = YAML.parse(data.toString())

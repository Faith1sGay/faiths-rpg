import YAML from 'yaml'
import * as Paths from 'path'
import * as fs from 'fs'
const data = fs.readFileSync(Paths.resolve('./combat/data/data.yml'))
export const gameCombat = YAML.parse(data.toString())

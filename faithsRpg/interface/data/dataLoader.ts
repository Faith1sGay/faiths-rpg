import * as YAML from 'yaml'
import * as Paths from 'path'
import * as fs from 'fs'
const data = YAML.parse(fs.readFileSync(Paths.resolve('./data.yml')).toString())
module.exports = data

import YAML = require('yaml')
import Paths = require('path')
import fs = require('fs')
const data = YAML.parse(await fs.readFileSync(Paths.resolve('./data.yml')).toString())
module.exports = data
import YAML from 'yaml';
import * as Paths from 'path';
import * as fs from 'fs';
const data = fs.readFileSync(Paths.resolve('./interface/data/data.yml'));
export const gameInterface = YAML.parse(data.toString());

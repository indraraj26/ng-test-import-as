const chalk = require('chalk');
import * as env from '../src/environments/environment';
import * as envProduction from '../src/environments/environment.prod';
import * as envDev from '../src/environments/environment.dev';

let config: any = {};

const log = console.log;
log(process.argv[2]);
const arg = process.argv[2];

if (arg == 'serve') {
  config = { ...env.environment };
} else if (arg == 'Production') {
  config = { ...envProduction.environment };
} else if (arg == 'Development') {
  config = { ...envDev.environment };
}

log(chalk.red('================================================'));
log(chalk.green('Configuration : ') + chalk.blue(arg));
log(chalk.green('API URL : ') + chalk.blue(config.apiUrl));
log(chalk.green('Storage URL : ') + chalk.blue(config.storageApiUrl));
log(chalk.red('================================================'));

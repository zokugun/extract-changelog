import { Command } from '@zokugun/cli-utils/commander';

import { get } from './commands/get.js';
import { list } from './commands/list.js';
import pkg from '../package.json' with { type: 'json' };

const program = new Command();

program
	.version(pkg.version, '-v, --version')
	.description(pkg.description);

program
	.command('get')
	.description('extract the changelog entry for a version.')
	.option('-f, --file <file>', 'path to the changelog file (defaults to ./CHANGELOG.md).')
	.option('-j, --json', 'output the version and changelog as JSON.')
	.argument('<version>', 'version to extract.')
	.action(get);

program
	.command('list')
	.description('list versions and their changelog entries.')
	.option('-f, --file <file>', 'path to the changelog file (defaults to ./CHANGELOG.md).')
	.action(list);

program.parse();

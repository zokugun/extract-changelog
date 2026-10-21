import logger from '@zokugun/cli-utils/logger';
import fse from '@zokugun/fs-extra-plus/async';

import { listVersions } from '../utils/list-versions.js';

type Options = {
	file?: string;
};

export async function list(options: Options): Promise<void> {
	const file = options.file ?? fse.join('.', 'CHANGELOG.md');
	const content = await fse.readFile(file, 'utf8');

	if(content.fails) {
		logger.fatal(`Cannot read file "${file}"`);
	}

	const result = listVersions(content.value);

	if(result.fails) {
		logger.fatal(result.error);
	}

	// eslint-disable-next-line no-console
	console.log(result.value);
}

import logger from '@zokugun/cli-utils/logger';
import fse from '@zokugun/fs-extra-plus/async';

import { extractVersion } from '../utils/extract-version.js';

type Options = {
	file?: string;
	json?: boolean;
};

export async function get(version: string, options: Options): Promise<void> {
	const file = options.file ?? fse.join('.', 'CHANGELOG.md');
	const content = await fse.readFile(file, 'utf8');

	if(content.fails) {
		logger.fatal(`Cannot read file "${file}"`);
	}

	const result = extractVersion(version, content.value, options);

	if(result.fails) {
		logger.fatal(result.error);
	}

	// eslint-disable-next-line no-console
	console.log(result.value);
}

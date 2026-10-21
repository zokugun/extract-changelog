import type { Result } from '@zokugun/xtry/sync';

import process from 'node:process';
import fse from '@zokugun/fs-extra-plus/sync';
import { xtry } from '@zokugun/xtry/sync';
import { expect, it } from 'vitest';
import YAML from 'yaml';

import { extractVersion } from '../src/utils/extract-version.js';

const DEBUG = process.env.DEBUG === '1' || process.env.DEBUG === 'true' || process.env.DEBUG === 'on';
const ROOT = fse.join('.', 'test', 'fixtures', 'version');

const files = fse.walk(ROOT, {
	absolute: true,
	onlyFiles: true,
	collect: true,
	filter: (item) => item.path.endsWith('.yml'),
});

if(files.fails) {
	throw files.error;
}

for(const file of files.value) {
	const name = fse.leafName(file.path, 1);

	it(name, () => {
		const document = readYaml(file.path);
		if(document.fails) {
			throw document.error;
		}

		const { content, expected, version, options = {} } = document.value as { content: string; expected: string; options?: Parameters<typeof extractVersion>[2]; version: string };
		const result = extractVersion(version, content, options);

		try {
			expect(result.fails).to.be.false;

			expect(result.value).to.eql(expected.trim());
		}
		catch(error) {
			if(DEBUG) {
				// eslint-disable-next-line no-console
				console.log(YAML.stringify(result));
			}

			throw error;
		}
	});
}

function readYaml(path: string): Result<unknown, NodeJS.ErrnoException> {
	const content = fse.readFile(path, 'utf8');
	if(content.fails) {
		return content;
	}

	return xtry(() => YAML.parse(content.value) as unknown);
}

import type { DResult } from '@zokugun/xtry';

import { toLines } from '@zokugun/text-line-utils';
import { err, ok } from '@zokugun/xtry';

import { escape } from './escape.js';

const HEADER_REGEX = /^(?:##\s*)?\[?v?\d+\.\d+\.\d+/;

export function extractVersion(version: string, content: string, options: { json?: boolean }): DResult<string> {
	if(version.startsWith('v')) {
		version = version.slice(1);
	}

	const versionRegex = new RegExp(`^(##\\s*)?\\[?v?${escape(version)}`, 's');

	const lines = toLines(content);

	for(const [index, line] of lines.entries()) {
		const match = versionRegex.exec(line);

		if(match) {
			let i = index + 1;

			if(!match[1]) {
				if(!lines[index + 1].startsWith('---')) {
					continue;
				}

				i += 1;
			}

			const entryLines: string[] = [];

			while(i < lines.length) {
				if(HEADER_REGEX.test(lines[i])) {
					break;
				}

				entryLines.push(lines[i]);

				i += 1;
			}

			if(options.json) {
				const data = {
					version,
					changelog: entryLines.join('\n').trim(),
				};

				return ok(JSON.stringify(data, null, 2));
			}
			else {
				return ok(entryLines.join('\n').trim());
			}
		}
	}

	return err(`No changelog entry found for version "${version}"`);
}

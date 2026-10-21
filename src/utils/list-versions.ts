import type { DResult } from '@zokugun/xtry';

import { toLines } from '@zokugun/text-line-utils';
import { ok } from '@zokugun/xtry';

const HEADER_REGEX = /^(##\s*)?\[?v?(\d+\.\d+\.\d[0-9A-Za-z]*)/;

export function listVersions(content: string): DResult<string> {
	const lines = toLines(content);
	const entries: Array<{ changelog: string; version: string }> = [];

	for(let i = 0; i < lines.length; i += 1) {
		const match = HEADER_REGEX.exec(lines[i]);

		if(!match) {
			continue;
		}

		let j = i + 1;

		if(!match[1]) {
			if(!lines[j].startsWith('---')) {
				continue;
			}

			j += 1;
		}

		const entryLines: string[] = [];

		while(j < lines.length) {
			if(HEADER_REGEX.test(lines[j])) {
				break;
			}

			entryLines.push(lines[j]);

			j += 1;
		}

		entries.push({
			version: match[2],
			changelog: entryLines.join('\n'),
		});
	}

	return ok(JSON.stringify(entries, null, 2));
}

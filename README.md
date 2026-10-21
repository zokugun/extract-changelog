[@zokugun/extract-changelog](https://github.com/zokugun/extract-changelog)
==========================================================================

[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)
[![NPM Version](https://img.shields.io/npm/v/@zokugun/extract-changelog?color=brightgreen)](https://www.npmjs.com/package/@zokugun/extract-changelog)
[![NodeJS Version](https://img.shields.io/badge/node.js-%3E%3D%2018.20-green)](#requirements)
[![Modules](https://img.shields.io/badge/modules-ESM%20%7C%20CJS-green)](#requirements)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-f87171?logo=kofi&logoColor=white)](https://ko-fi.com/daiyam)
[![Liberapay](https://img.shields.io/badge/Liberapay-facc15?logo=liberapay&logoColor=black)](https://liberapay.com/daiyam/donate)
[![PayPal](https://img.shields.io/badge/PayPal-5277C3?logo=paypal&logoColor=white)](https://paypal.me/daiyam99)

> Parse your CHANGELOG.md to list all available versions or pull specific entries based on version numbers. Clean, fast, and easy to integrate.

Features
--------

- **Version Extraction**: Retrieve content for a specific version number.
- **Full List Generation**: Generate a complete list of all versions and entries.
- **JSON Support**: Export extracted data in structured JSON format.
- **Custom File Paths**: Specify any changelog file using the command line.
- **Markdown Compatibility**: Automatically parse standard Markdown header styles.
- **CLI Tooling**: Execute commands directly from your terminal or CI/CD pipeline.

Installation
------------

```bash
npm add @zokugun/extract-changelog
```

Requirements
------------

- **Node.js**: `v18.20` or higher
- **Modules**: ECMAScript Modules (`ESM`) or CommonJS (`CJS`)

Quick Start
-----------

You can extract versions or list all entries directly from the terminal without writing code.

**Extract a specific version:**

```bash
# Extract notes for version 1.2.0 (defaults to ./CHANGELOG.md)
npx extract-changelog get 1.2.0

# Extract as JSON from a custom file path
npx extract-changelog get 1.2.0 --file ./docs/CHANGELOG.md --json
```

**List all versions:**

```bash
# List all detected versions and their entries
npx extract-changelog list
```

Contributions
-------------

Contributions are most welcome. Please:

- Open issues and feature requests under the repository discussions.
- Follow the [`CONTRIBUTING.md`](./CONTRIBUTING.md).

Donations
---------

Support this project by becoming a financial contributor.

<table>
   <tr>
      <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_kofi.png" alt="Ko-fi" width="80px" height="80px"></td>
      <td><a href="https://ko-fi.com/daiyam" target="_blank">ko-fi.com/daiyam</a></td>
   </tr>
   <tr>
      <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_liberapay.png" alt="Liberapay" width="80px" height="80px"></td>
      <td><a href="https://liberapay.com/daiyam/donate" target="_blank">liberapay.com/daiyam/donate</a></td>
   </tr>
   <tr>
      <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_paypal.png" alt="PayPal" width="80px" height="80px"></td>
      <td><a href="https://paypal.me/daiyam99" target="_blank">paypal.me/daiyam99</a></td>
   </tr>
</table>

License
-------

Copyright &copy; 2026-present Baptiste Augrain

Licensed under the [MIT license](https://opensource.org/licenses/MIT).

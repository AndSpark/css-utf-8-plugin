# css-utf-8-plugin

webpack plugin for add `@charset "UTF-8"` on each css file.

## Installation:

```bash
	npm install css-utf-8-plugin
```

## Usage

```js
const CssUtf8Plugin = require('css-utf-8-plugin')

module.exports = {
	// ...other
	plugins: [new CssUtf8Plugin()]
}
```

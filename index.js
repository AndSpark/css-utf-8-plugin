class CssUtf8Plugin {
	apply(compiler) {
		compiler.hooks.emit.tapAsync('CssUtf8Plugin', (compilation, callback) => {
			const assets = compilation.assets
			const keys = Object.keys(assets)
			keys.forEach(key => {
				const content = assets[key].source()
				if (key.endsWith('.css')) {
					assets[key] = {
						source: () => 'utf-8\n' + content,
						size: () => content.length
					}
				}
			})
			callback()
		})
	}
}

module.exports = CssUtf8Plugin

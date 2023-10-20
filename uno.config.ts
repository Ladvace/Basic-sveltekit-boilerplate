// uno.config.ts
import { defineConfig, presetIcons, presetWebFonts } from 'unocss';
import presetUno from '@unocss/preset-uno';

export default defineConfig({
	presets: [
		presetUno(),
		presetWebFonts({}),
		presetIcons({
			collections: {
				hero: () => import('@iconify-json/heroicons/icons.json').then((i) => i.default)
			}
		})
	]
});

// uno.config.ts
import { defineConfig, presetIcons, presetWebFonts } from 'unocss';
import presetUno from '@unocss/preset-uno';

export default defineConfig({
	presets: [
		presetUno(),
		presetWebFonts({ fonts: { serif: 'Bespoke Serif' }, provider: 'fontshare' }),
		presetIcons({
			collections: {
				hero: () => import('@iconify/json/json/heroicons.json').then((i) => i.default)
			}
		})
	],
	theme: {
		colors: {
			neutral: {
				'50': '#E0E0E8',
				'100': '#B8B8C2',
				'200': '#9090A0',
				'300': '#686880',
				'400': '#505068',
				'500': '#383850',
				'600': '#303040',
				'700': '#282830',
				'800': '#202028',
				'900': '#181820',
				'950': '#101018'
			},
			primary: '#D81E5B'
		}
	}
});

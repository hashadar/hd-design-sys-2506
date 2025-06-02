/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ['Cormorant', 'serif'],
				mono: ['JetBrains Mono', 'monospace']
			},
			colors: {
				cream: {
					50: '#fefcf9',
					100: '#fdfbf7',
					200: '#fbf7f0',
					300: '#f8f2e8',
					400: '#f5ede0',
					500: '#f2e8d8',
					600: '#e6d4b8',
					700: '#d4bc92',
					800: '#b89f6c',
					900: '#8f7a52'
				},
				green: {
					50: '#f0f4f2',
					100: '#dce8e1',
					200: '#b8d1c2',
					300: '#95baa4',
					400: '#6b9a7d',
					500: '#4a7c59',
					600: '#3d6b4a',
					700: '#2f5239',
					800: '#1b4332',
					900: '#0f2d1f'
				},
				orange: {
					50: '#fef7f0',
					100: '#fdeadb',
					200: '#f9d2b5',
					300: '#f5ba8f',
					400: '#e69f69',
					500: '#d18442',
					600: '#b86a1c',
					700: '#b45309',
					800: '#8a4107',
					900: '#5f2d05'
				}
			}
		}
	},
	plugins: []
}; 
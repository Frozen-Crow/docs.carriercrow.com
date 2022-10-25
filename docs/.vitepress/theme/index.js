import DefaultTheme from 'vitepress/theme'
import './custom.scss'

import VueFeather from 'vue-feather';

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		app.component(VueFeather.name, VueFeather);
	}
}

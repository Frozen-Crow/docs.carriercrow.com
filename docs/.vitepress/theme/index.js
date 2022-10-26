import DefaultTheme from 'vitepress/theme'
import './custom.scss'

import VueFeather from 'vue-feather';
import Popper from "vue3-popper";

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		app.component(VueFeather.name, VueFeather);
		app.component("Popper", Popper);
	}
}

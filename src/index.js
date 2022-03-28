//Load components from Zimbra
import { createElement } from 'preact';
import { provide } from 'preact-context-provider';

//Load the createMore function from our Zimlet component
import createMore from './components/more';

//Create function by Zimbra convention
export default function Zimlet(context) {
	//Get the 'plugins' object from context and define it in the current scope
	const { plugins } = context;
	const exports = {};

	exports.init = function init() {
		//Here we load the moreMenu Zimlet item into the UI slot:
		plugins.register('slot::action-menu-mail-more', provide(context)(createMore));
	};
	return exports;
}

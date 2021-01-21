import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { Provider } from 'mobx-react';
import { Display } from './components/Display/Display';
import { MainKeyboard } from './containers/MainKeyboard/MainKeyboard';
import { default as AppStyles } from './App.module.scss';
import { getRootStores } from './stores/gerRootStores';

bemCssModules.setSettings({
	modifierDelimiter: '--'
});

const style = bemCssModules(AppStyles);

function App() {
	return (
		<Provider {...getRootStores()}>
			<div className={style()}>
				<Display />
				<MainKeyboard />
				<div className='underline'></div>
			</div>
		</Provider>
	);
}

export default App;
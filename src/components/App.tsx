import React from 'react';

//Styles
import classes from './App.module.css';

//context
import AppContextProvider from '../store/app-context';

//Components
import Header from './Header';
import Content from './Content';

const App: React.FC = () => {
	return (
		<div id="header" className={classes.container}>
			<Header />
			<AppContextProvider>
				<Content />
			</AppContextProvider>
		</div>
	);
};

export default App;

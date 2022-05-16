import React from 'react';

//styles
import classes from './Content.module.css';
//components
import Sidebar from './Sidebar';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';

const Content: React.FC = () => {
	return (
		<div id="content" className={classes.content}>
			<BrowserRouter>
				<Sidebar />
				<Main />
			</BrowserRouter>
		</div>
	);
};

export default Content;

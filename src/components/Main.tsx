// import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

//classes
import classes from './Main.module.css';
// import Loader from './reusable/Loader';

//components
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';

const Main = () => {
	/*
	Important Note:
	Having to remove dynamic imports with Lazy and Suspense 
	because CodeSandbox is having trouble transpiling dymanic imports. 
	This seems to be a common issue with CodeSandbox and there have been more than 
	one issues opened on this in the past.
*/

	// const Characters = React.lazy(() => import('./pages/Characters'));
	// const Episodes = React.lazy(() => import('./pages/Episodes'));

	return (
		<main className={classes.main}>
			{/* <Suspense fallback={<Loader />}> */}
			<Routes>
				<Route path="/" element={<Characters />} />
				<Route path="/episodes" element={<Episodes />} />
			</Routes>
			{/* </Suspense> */}
		</main>
	);
};

export default Main;

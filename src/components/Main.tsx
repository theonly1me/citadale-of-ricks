import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

//classes
import classes from './Main.module.css';
import Loader from './reusable/Loader';

const Main = () => {
	const Characters = React.lazy(() => import('./pages/Characters'));
	const Episodes = React.lazy(() => import('./pages/Episodes'));

	return (
		<main className={classes.main}>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/" element={<Characters />} />
					<Route path="/episodes" element={<Episodes />} />
				</Routes>
			</Suspense>
		</main>
	);
};

export default Main;

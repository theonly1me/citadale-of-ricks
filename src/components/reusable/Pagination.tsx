import { useContext } from 'react';
//styles
import classes from './Pagination.module.css';

//state
import { AppContext } from '../../store/app-context';

const Pagination = () => {
	const appContext = useContext(AppContext);
	const { updateCurrentPage, currentPage, characterInfo } = appContext;
	let page = characterInfo?.pages;
	const onNextPageHandler = () => {
		if (page && currentPage >= +page && updateCurrentPage) {
			updateCurrentPage(1);
			return;
		}
		if (updateCurrentPage) updateCurrentPage(currentPage + 1);
	};

	const onPrevPageHandler = () => {
		if (currentPage === 1) return;
		if (updateCurrentPage) updateCurrentPage(currentPage - 1);
	};

	const onFirstPageHandler = () => {
		if (updateCurrentPage) updateCurrentPage(1);
	};

	const onLastPageHandler = () => {
		if (updateCurrentPage) updateCurrentPage(page ? +page : 42);
	};

	return (
		<div className={classes.container}>
			<button className={`${classes.button} ${classes.first}`} onClick={onFirstPageHandler}>
				First
			</button>
			<button className={classes.button} onClick={onPrevPageHandler}>
				&larr;
			</button>
			<button className={classes.button} onClick={onNextPageHandler}>
				&rarr;
			</button>
			<button className={`${classes.button} ${classes.last}`} onClick={onLastPageHandler}>
				Last
			</button>
		</div>
	);
};

export default Pagination;

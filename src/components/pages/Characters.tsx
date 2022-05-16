import React, { useState, useRef, useContext, useEffect, useMemo } from 'react';

//state
import { AppContext } from '../../store/app-context';

//custom hooks
import { useFetch } from '../../hooks/useFetch';

//types
import { Character } from '../../interfaces/Character';
import { Info } from '../../interfaces/Response';

//styles
import classes from './Characters.module.css';

//assets
import searchSprite from '../../assets/sprite.svg';

//components
import Grid from '../Grid';
import Loader from '../reusable/Loader';

const Characters: React.FC = () => {
	const [searchText, setSearchText] = useState('');
	const searchRef = useRef<HTMLInputElement | null>(null);
	const appContext = useContext(AppContext);
	const page = appContext.currentPage;
	let pageUrl = useMemo(() => `/character?page=${page}`, [page]);
	let searchUrl = useMemo(() => `/character?name=${searchText}`, [searchText]);

	const { data, loading } = useFetch((searchText && searchUrl) || pageUrl);
	const { updateCharacterData, updateCharacterInfo } = appContext;

	useEffect(() => {
		if (updateCharacterData) updateCharacterData(data?.results as Character[]);
		if (updateCharacterInfo) updateCharacterInfo(data?.info as Info);
	}, [data, updateCharacterData, updateCharacterInfo]);

	const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (typeof searchRef?.current?.value === 'string') setSearchText(searchRef.current.value);
	};

	return (
		<div className={classes.container}>
			<form action="#" onSubmit={onSubmitHandler} className={classes.search}>
				<input type="text" className={classes.input} placeholder="Enter a name to search..." ref={searchRef} />
				<button className={classes.button}>
					<svg className={classes.icon}>
						<use href={searchSprite + '#icon-magnifying-glass'} />
					</svg>
				</button>
			</form>
			{(loading && <Loader />) || <Grid isParentCharacters />}
		</div>
	);
};

export default Characters;

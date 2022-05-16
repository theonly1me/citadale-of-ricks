import React, { useContext } from 'react';

//types
import { Character } from '../interfaces/Character';

//styles
import classes from './Grid.module.css';

//components
import Card from './Card';
//state
import { AppContext } from '../store/app-context';

const Grid: React.FC<{ charactersProp?: Character[]; isParentCharacters: Boolean }> = ({
	charactersProp,
	isParentCharacters
}) => {
	let characters: Character[] = [];
	const appContext = useContext(AppContext);
	if (isParentCharacters) {
		characters = appContext.characterData;
	} else {
		if (charactersProp) characters = charactersProp;
	}

	return (
		<div className={classes.container}>
			{characters?.map((character) => (
				<Card key={character.id} character={character} />
			))}
		</div>
	);
};

export default Grid;

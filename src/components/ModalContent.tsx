import React from 'react';
import { useFetch, useFetchList } from '../hooks/useFetch';
//types
import { Character } from '../interfaces/Character';

// styles
import classes from './ModalContent.module.css';

const ModalContent: React.FC<{ character: Character }> = ({ character }) => {
	const locationURL = character.origin.url;
	const idx = locationURL.lastIndexOf('/');
	const locationId = locationURL.slice(idx + 1);
	let url = `/location/${locationId}`;
	const locationResponse = useFetch(url);

	let location = (locationResponse.data as unknown) as Location;

	return (
		<div className={classes.card}>
			<div className={classes.imgContainer}>
				<img src={character.image} className={classes.image} alt={character.name} />
				<h5 className={classes.name}>{character.name}</h5>
			</div>
			<div className={classes.backdrop}>Status </div>
			<div className={`${classes.status} ${character.status === 'Alive' ? classes.green : classes.red}`} />
			<div className={classes.container}>
				<div className={classes.containerItem}>
					<p className={classes.key}>Last Seen</p>
					<p className={classes.text}> {character?.location?.name}</p>
				</div>
				<div className={classes.containerItem}>
					<p className={classes.key}>Origin</p>
					<p className={classes.text}> {character?.origin.name}</p>
				</div>
			</div>
			<div className={classes.container}>
				<div className={classes.containerItem}>
					<p className={classes.key}>Dimension</p>
					<p className={classes.text}>{location?.dimension}</p>
				</div>
				<div className={classes.containerItem}>
					<p className={classes.key}>Origin Residents</p>
					<p className={classes.text}> {location?.residents?.length}</p>
				</div>
			</div>
			<div className={classes.container}>
				<div className={classes.containerItem}>
					<p className={classes.key}>Species</p>
					<p className={classes.text}> {character?.species}</p>
				</div>
				<div className={classes.containerItem}>
					<p className={classes.key}>Gender</p>
					<p className={classes.text}> {character?.gender}</p>
				</div>
			</div>
		</div>
	);
};

export default ModalContent;

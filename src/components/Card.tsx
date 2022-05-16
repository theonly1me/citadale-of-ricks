import React, { useState } from 'react';

//types
import { Character } from '../../interfaces/Character';

//styles
import classes from './Card.module.css';

//components
import Modal from './Modal';
import ModalContent from './ModalContent';

const Card: React.FC<{ character: Character }> = ({ character }) => {
	const [isOpen, setIsOpen] = useState(false);

	const onCloseHandler = () => {
		setIsOpen(false);
	};

	const onOpenHandler = () => {
		setIsOpen(true);
	};

	return (
		<>
			<div className={classes.card} onClick={onOpenHandler}>
				<img src={character.image} className={classes.image} alt={character.name} />
				<h5 className={classes.name}>{character.name}</h5>
				<div className={classes.backdrop}>Status </div>
				<div className={`${classes.status} ${character.status === 'Alive' ? classes.green : classes.red}`} />
				<div className={classes.container}>
					<p className={classes.key}>Last Seen</p>
					<p className={classes.text}> {character?.location?.name}</p>
				</div>
				<div className={classes.container}>
					<p className={classes.key}>Origin</p>
					<p className={classes.text}> {character?.origin.name}</p>
				</div>
				<div className={classes.container}>
					<p className={classes.key}>Species</p>
					<p className={classes.text}> {character?.species}</p>
				</div>
				<div className={classes.container}>
					<p className={classes.key}>Gender</p>
					<p className={classes.text}> {character?.gender}</p>
				</div>
			</div>
			<Modal onClose={onCloseHandler} isOpen={isOpen}>
				<ModalContent character={character} />
			</Modal>
		</>
	);
};

export default Card;

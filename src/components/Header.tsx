import React from 'react';

//assets
import headerImg from '../assets/header.png';
import portal from '../assets/portal.png';

//styles
import classes from './Header.module.css';

//Components
import Button from './reusable/Button';

const Header: React.FC = () => {
	return (
		<header className={classes.header}>
			<h2 className={classes['header-text']}>The Citadale of Ricks Database</h2>

			<div className={classes.imgContainer}>
				<img src={headerImg} className={classes.image} alt="header logo" />
				<img src={portal} className={classes.portal} alt="header logo" />
			</div>
			<Button test-id="btn-enter" buttonText="Enter" classes={classes} />
		</header>
	);
};

export default Header;

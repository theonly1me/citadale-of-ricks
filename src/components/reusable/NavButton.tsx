import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ButtonProps } from '../../types';

const NavButton: React.FC<ButtonProps> = ({ svg, iconName, buttonText, classes, to }) => {
	const navigate = useNavigate();
	return (
		<a
			href="#"
			onClick={(e) => {
				e.preventDefault();
				navigate(to);
			}}
			className={classes.button}>
			<svg className={classes.icon}>
				<use href={svg + iconName} />
			</svg>
			<span>{buttonText}</span>
		</a>
	);
};

export default NavButton;

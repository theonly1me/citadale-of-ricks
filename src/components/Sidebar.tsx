import { useLocation } from 'react-router-dom';
//assets
import sprite from '../assets/sprite.svg';
//styles
import classes from './Sidebar.module.css';

//components
import NavButton from './reusable/NavButton';
import Pagination from './reusable/Pagination';

const Sidebar: React.FC = () => {
	const { pathname } = useLocation();
	return (
		<nav id="sidebar" className={classes.sidebar}>
			<ul className={classes.sidenav}>
				<li className={classes.item}>
					<NavButton
						buttonText="Characters"
						classes={classes}
						to={'/'}
						iconName={'#icon-v-card'}
						svg={sprite}
					/>
				</li>
				<li className={classes.item}>
					<NavButton
						buttonText="Episodes"
						classes={classes}
						to={'/episodes'}
						iconName={'#icon-tv'}
						svg={sprite}
					/>
				</li>
			</ul>

			{pathname === '/' ? <Pagination /> : null}
			<div className={classes.copyright}>&copy; 2022 Atchyut Preetham Pulavarthi</div>
		</nav>
	);
};

export default Sidebar;

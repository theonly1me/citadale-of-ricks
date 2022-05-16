// types
import { Option } from '../../types';

// styles
import classes from './Dropdown.module.css';

const Dropdown: React.FC<{ options: Option[]; onSelectHandler: (option: number) => void }> = ({
	options,
	onSelectHandler
}) => {
	return (
		<select
			defaultValue={0}
			onChange={(e) => {
				let currentOption = e.target.value.split(' ');
				onSelectHandler(+currentOption[currentOption.length - 1]);
			}}
			className={classes.select}>
			<option value={0} disabled>
				SELECT AN OPTION
			</option>
			{options.map((child, idx) => (
				<option className={classes.option} value={idx + 1} key={idx + 1}>
					{child.name}
				</option>
			))}
		</select>
	);
};

export default Dropdown;

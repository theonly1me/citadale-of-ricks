import { useEffect, useState } from 'react';
// custom hooks
import { useFetch, useFetchList } from '../../hooks/useFetch';

// components
import Dropdown from '../reusable/Dropdown';
// types
import { Option } from '../../types';
import { Episode } from '../../interfaces/Episode';
import Loader from '../reusable/Loader';
import Grid from '../Grid';

// styles
import classes from './Episodes.module.css';

const Episodes = () => {
	const [option, setOption] = useState<number>(0);
	const [characterIds, setCharacterIds] = useState<string>('');
	const [episode, setEpisode] = useState<Episode | null>(null);

	const onSelectHandler = (option: number) => {
		setOption(option);
	};

	//Build options for dropdown
	let options: Option[] = [];
	for (let i = 1; i < 52; i++) options.push({ id: i, name: `Episode ${i}` });

	//Fetch the episode data
	const url = (option && `/episode/${option}`) || '';
	const response = useFetch(url);
	let data: Episode;
	data = response.data as Episode;

	//Set the episode data
	useEffect(() => {
		setEpisode(data);
		const ids = data?.characters
			.map((character: string) => {
				let i = character.lastIndexOf('/');
				return +character.slice(i + 1);
			})
			.join(',');
		setCharacterIds(ids);
	}, [data]);

	//build the characters url with all ids
	const charURL = (characterIds?.length && `/character/${characterIds}`) || '';
	//fetch the character data
	const { data: charList, loading } = useFetchList(charURL);

	return (
		<div className={classes.container}>
			<Dropdown onSelectHandler={onSelectHandler} options={options} />
			{(loading && <Loader />) ||
				(episode && (
					<>
						<div className={classes['episode-info']}>
							<h3>{`${episode?.episode} : ${episode?.name}`}</h3>
							<span>{episode?.air_date}</span>
						</div>
						<Grid charactersProp={charList} isParentCharacters={false} />
					</>
				))}
		</div>
	);
};

export default Episodes;

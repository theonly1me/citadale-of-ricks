import { Character } from '../interfaces/Character';
import { Episode } from '../interfaces/Episode';
import { Info } from '../interfaces/Response';

export type Origin = {
	name: string;
	url: string;
};

export type ButtonProps = {
	svg: SVGElement;
	iconName: string;
	buttonText: string;
	classes: { button: string; icon: string };
	to: string;
};

export type ContextObject = {
	characterData: Character[];
	locationData?: Location[];
	episodeData?: Episode[];
	currentPage: number;
	characterInfo?: Info;
	updateCharacterInfo?: (info: Info) => void;
	updateCharacterData?: (data: Character[]) => void;
	updateCurrentPage?: (page: number) => void;
};

export type Option = {
	id: number;
	name: string;
};

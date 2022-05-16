import { Character } from './Character';
import { Episode } from './Episode';
import { Location } from './Location';

export type Info = {
	count: number;
	pages: number;
	next: string;
	prev: null;
};

export interface Response {
	info: Info;
	results: Character[] | Location[] | Episode[];
}

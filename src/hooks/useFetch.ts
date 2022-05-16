import { useEffect, useState } from 'react';
import axios from 'axios';
//types
import { Response } from '../interfaces/Response';
import { Episode } from '../interfaces/Episode';
import { Character } from '../interfaces/Character';
import { Location } from '../interfaces/Location';

//constants
import { BASE_URL } from '../utils/constants';

//create axios instance with base URL
const httpClient = axios.create({
	baseURL: BASE_URL
});

export const useFetch = (url: string) => {
	const [data, setData] = useState<Episode | Location | Character | Response | null>(null);
	const [error, setError] = useState<Error | null>(null);
	const [loading, setLoading] = useState<Boolean | null>(null);

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				if (url) {
					let data: Episode | Character | Location | Response;

					const response = await httpClient.get(url);
					data = response.data;
					setData(data);
				}
			} catch (e) {
				if (e instanceof Error) setError(e);
			} finally {
				setLoading(false);
			}
		})();
	}, [url]);

	return { data, error, loading };
};

export const useFetchList = (url: string) => {
	const [data, setData] = useState<Character[] | Episode[]>([]);
	const [error, setError] = useState<Error | null>(null);
	const [loading, setLoading] = useState<Boolean | null>(null);

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				if (url) {
					const characterResponse = await httpClient.get<Character[] | Episode[]>(url);
					let charList = characterResponse.data;
					setData(charList);
				}
			} catch (e) {
				if (e instanceof Error) setError(e);
			} finally {
				setLoading(false);
			}
		})();
	}, [url]);

	return { data, error, loading };
};

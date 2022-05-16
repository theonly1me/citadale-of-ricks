import React, { useState, useMemo } from 'react';

//types
import { ContextObject } from '../types';
import { Info } from '../interfaces/Response';
import { Character } from '../interfaces/Character';

export const AppContext = React.createContext<ContextObject>({
	characterData: [],
	locationData: [],
	episodeData: [],
	currentPage: 0
});

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [characterInfo, setCharacterInfo] = useState<Info>();
	const [characterData, setCharacterData] = useState<Character[]>([]);
	const [currentPage, setCurrentPage] = useState(1);

	const updateCharacterInfo = (info: Info) => {
		setCharacterInfo(info);
	};

	const updateCharacterData = (data: Character[]) => {
		setCharacterData(data);
	};

	const updateCurrentPage = (page: number) => {
		setCurrentPage(page);
	};

	const contextValue = useMemo(
		() => ({
			characterData,
			characterInfo,
			currentPage,
			updateCharacterData,
			updateCharacterInfo,
			updateCurrentPage
		}),
		[characterData, characterInfo, currentPage]
	);

	return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppContextProvider;

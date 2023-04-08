import { createContext } from 'react';

export type PageContextType = {
	isMobile?: boolean;
};
export const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageContextProvider = PageContext.Provider;

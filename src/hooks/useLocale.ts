import { useContext } from 'react';
import { LocaleContext } from 'src/locale';

export const useLocale = () => {
	return useContext(LocaleContext) ?? 'vi';
};

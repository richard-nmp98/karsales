import { useContext, useMemo } from 'react';
import { PageContext } from 'src/context/PageContext';
import { getMobileDetect } from 'src/helpers/get-mobile-detect';

export const useIsMobile = () => {
	const context = useContext(PageContext);
	const isMobileClientCheck = useMemo(() => {
		const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
		const data = getMobileDetect(userAgent);
		const isSSR = data.isSSR();
		const isM = data.isMobile();
		return isSSR ? undefined : isM;
	}, []);
	const isMobile = context?.isMobile ?? isMobileClientCheck;
	return isMobile;
};

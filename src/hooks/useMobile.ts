import { useMemo } from 'react';
import { getMobileDetect } from 'src/helpers/get-mobile-detect';

export const useMobile = () => {
	const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

	const { isMobile, isSSR } = getMobileDetect(userAgent);
	return useMemo(() => ({ isMobile: isMobile(), isSSR: isSSR() }), [isMobile, isSSR]);
};

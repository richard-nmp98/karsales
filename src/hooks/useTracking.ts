import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { pageview as pageviewGTAG, event as eventGTAG } from 'src/helpers/gtag';
import { pageview as pageviewGA } from 'src/helpers/ga';
import { pageview as pageviewPixel } from 'src/helpers/fpixel';

export const useTracking = () => {
	const router = useRouter();
	useEffect(() => {
		pageviewPixel();
		const handleRouteChange = (url: string) => {
			eventGTAG('conversion', { send_to: 'AW-603585656/k9mwCKX9jN8BEPj4558C' });
			pageviewPixel();
			pageviewGTAG(url);
			pageviewGA();
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);
};

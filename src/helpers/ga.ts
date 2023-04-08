export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export const pageview = () => {
	if (GA_TRACKING_ID && window.ga) {
		window.ga('send', 'pageview');
	}
};

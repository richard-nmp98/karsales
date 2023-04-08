export const GTAG_TRACKING_ID = process.env.NEXT_PUBLIC_GTAG_TRACKING_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
	if (GTAG_TRACKING_ID && window.gtag)
		window.gtag('config', GTAG_TRACKING_ID, {
			page_path: url,
		});
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (
	name: Gtag.EventNames | string,
	params?: Gtag.ControlParams | Gtag.EventParams | Gtag.CustomParams,
) => {
	if (GTAG_TRACKING_ID && window.gtag) {
		window.gtag('event', name, params);
	}
};

export default { pageview, event };

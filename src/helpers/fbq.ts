export const init = (appId: string) => {
	if (window.fbq) {
		window.fbq('init', appId);
	}
};

export const trackPageView = () => {
	if (window.fbq) {
		window.fbq('track', 'PageView');
	}
};

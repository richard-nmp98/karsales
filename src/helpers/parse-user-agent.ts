export const BOT_UA = [
	'\\+https:\\/\\/developers.google.com\\/\\+\\/web\\/snippet\\/',
	'googlebot',
	'baiduspider',
	'gurujibot',
	'yandexbot',
	'slurp',
	'msnbot',
	'bingbot',
	'facebookexternalhit',
	'linkedinbot',
	'twitterbot',
	'slackbot',
	'telegrambot',
	'applebot',
	'pingdom',
	'tumblr',
];
import UAParser from 'ua-parser-js';

export function parseUserAgent(phase?: string) {
	const result: UAParser.IResult = new UAParser(phase).getResult();

	const regex = new RegExp(`(${BOT_UA.join('|')})`, 'ig');
	const isBot = phase ? regex.test(phase.toLowerCase()) : false;

	const browser = result.browser.name;
	const deviceType = result.device.type;
	const os = result.os.name;
	const engine = result.engine.name;
	const isMobile: boolean = deviceType === 'mobile';
	const isTablet: boolean = deviceType === 'tablet';
	const isIos: boolean = os === 'iOS';

	const ua = Object.freeze({
		browser,
		deviceType,
		os,
		engine,
		isMobile,
		isTablet,
		isIos,
		source: phase,
		deviceVendor: result.device.vendor || null,
		isIphone: isMobile && isIos,
		isIpad: isTablet && isIos,
		isDesktop: !isMobile && !isTablet,
		isChrome: browser === 'Chrome',
		isFirefox: browser === 'Firefox',
		isSafari: browser === 'Safari',
		isIE: browser === 'IE',
		isMac: os === 'Mac OS',
		isChromeOS: os === 'Chromium OS',
		isWindows: os === 'Windows',
		isAndroid: os === 'Android',
		isBot: isBot,
	});

	return ua;
}

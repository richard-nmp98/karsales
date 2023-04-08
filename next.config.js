const { createSecureHeaders } = require('next-secure-headers');
const { rewrites } = require('./src/config/route');
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	trailingSlash: false,
	reactStrictMode: false,
	compress: true,
	poweredByHeader: false,
	useFileSystemPublicRoutes: true,
	// target: 'server',
	// distDir: 'build',
	basePath: '',
	images: {
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		domains: ['cms-dev.karsales.asia', 'cms.karsales.asia'],
		path: '/_next/image',
		loader: 'default',
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	experimental: {
		appDir: true,
	},
	env: {
		reviewsCategoryNew: process.env.REVIEW_CATEGORY_NEW,
		reviewsCategoryVehicle: process.env.REVIEW_CATEGORY_VEHICLE,
		reviewsCategoryExperience: process.env.REVIEW_CATEGORY_EXPERIENCE,
		reviewsCategoryExperienceBuyCar: process.env.REVIEW_CATEGORY_EXPERIENCE_BUY_CAR,
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: createSecureHeaders({
					contentSecurityPolicy: {
						directives: {
							defaultSrc: "'self'",
							styleSrc: [
								"'self'",
								"'unsafe-inline'",
								'*.googleapis.com',
								'*.jsdelivr.net',
								'*.youtube.com',
								'*.vimeo.com',
							],
							scriptSrc: [
								"'self'",
								"'unsafe-inline'",
								"'unsafe-eval'",
								'*.google.com',
								'*.google-analytics.com',
								'*.googletagmanager.com',
								'*.gstatic.com',
								'*.facebook.net',
								'*.facebook.com',
								'*.googleapis.com',
								'*.ampproject.org',
								'*.jsdelivr.net',
								'*.youtube.com',
								'*.vimeo.com',
							],
							fontSrc: ["'self'", '*.gstatic.com', '*.youtube.com', '*.vimeo.com'],
							mediaSrc: ['*'],
							imgSrc: ['*', 'data:', '*.jsdelivr.net', '*.youtube.com', '*.vimeo.com'],
							scriptSrcElem: [
								"'self'",
								"'unsafe-inline'",
								'*.google.com',
								'*.google-analytics.com',
								'*.googletagmanager.com',
								'*.gstatic.com',
								'*.facebook.net',
								'*.facebook.com',
								'*.googleapis.com',
								'*.ampproject.org',
								'*.jsdelivr.net',
								'*.youtube.com',
								'*.vimeo.com',
							],
							frameSrc: ["'self'", '*.facebook.com', '*.google.com', '*.youtube.com', '*.vimeo.com'],
							connectSrc: ['*'],
						},
					},
					forceHTTPSRedirect: [
						true,
						{
							maxAge: 30 * 24 * 60 * 60,
							includeSubDomains: false,
							preload: false,
						},
					],
					referrerPolicy: 'no-referrer-when-downgrade',
				}),
			},
		];
	},
	async rewrites() {
		return rewrites;
	},
};

module.exports = nextConfig;

const SERVER_API_URL = 'http://api.karsales.asia';
const NEXT_PUBLIC_API_URL = '/graphql';

module.exports = {
	rewrites: [
		{
			source: '/danh-gia-xe',
			destination: '/vehicle-reviews',
		},
		{
			source: '/danh-gia-xe/:slug',
			destination: '/vehicle-reviews/:slug',
		},
		{
			source: '/tin-tuc/:slug',
			destination: '/news',
		},
		{
			source: '/thuong-hieu/:slug',
			destination: '/vehicle-reviews/:slug',
		},
		{
			source: '/tim-kiem/:slug',
			destination: '/search/:slug',
		},
		{
			source: '/gia-xe',
			destination: '/car-price',
		},
		{
			source: '/gia-xe/:slug',
			destination: '/car-price/:slug',
		},
		{
			source: '/gia-xe-cu',
			destination: '/used-car-price',
		},
		{
			source: '/gia-xe-cu/:slug',
			destination: '/used-car-price/:slug',
		},
		{
			source: '/mua-xe',
			destination: '/buy-car',
		},
		{
			source: '/mua-xe/:slug',
			destination: '/buy-car/:slug',
		},
		{
			source: '/khuyen-mai',
			destination: '/promotion',
		},
		{
			source: '/khuyen-mai/:slug',
			destination: '/promotion/:slug',
		},
		{
			source: '/bao-hiem',
			destination: '/insurance',
		},
		{
			source: '/bao-hiem/:slug',
			destination: '/insurance/:slug',
		},
		{
			source: '/chinh-sach-bao-mat',
			destination: '/regulatory-policy',
		},
		{
			source: '/cau-hoi-thuong-gap',
			destination: '/frequently-asked-questions',
		},
		{
			source: '/kinh-nghiem',
			destination: '/experience',
		},
		{
			source: '/kinh-nghiem/:slug',
			destination: '/experience/:slug',
		},
		{
			source: '/ve-karsales',
			destination: '/about',
		},
		{
			source: '/lien-he',
			destination: '/contact',
		},
		{
			source: '/hoc-vien-oto',
			destination: '/car-academy',
		},
		{
			source: '/hoc-vien-oto/:type/chuong/:slug',
			destination: '/car-academy/:type/chapter/:slug',
		},
		{
			source: '/hoc-vien-oto/:type/thi-thu/:slug',
			destination: '/car-academy/:type/test/:slug',
		},
		{
			source: `${process.env.NEXT_PUBLIC_API_URL || NEXT_PUBLIC_API_URL}/:path*`,
			destination: `${process.env.SERVER_API_URL || SERVER_API_URL}${
				process.env.NEXT_PUBLIC_API_URL || NEXT_PUBLIC_API_URL
			}`,
		},
	],
};

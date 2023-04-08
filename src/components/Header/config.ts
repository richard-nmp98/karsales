export const menuConfig = [
	{
		name: 'Đánh Giá Xe',
		href: '/danh-gia-xe',
		slug: ['danh-gia-xe', 'vehicle-reviews'],
	},
	{
		name: 'Giá Xe',
		href: '/gia-xe',
		slug: ['gia-xe-cu', 'used-car-price', 'gia-xe', 'car-price'],
		// children: [
		// 	{
		// 		name: 'Giá Xe',
		// 		href: '/gia-xe',
		// 		slug: ['gia-xe', 'car-price'],
		// 	},
		// 	{
		// 		name: 'Giá Xe Cũ',
		// 		href: '/gia-xe-cu',
		// 		slug: ['gia-xe-cu', 'used-car-price'],
		// 	},
		// ],
	},
	{
		name: 'Kinh Nghiệm',
		href: '/kinh-nghiem',
		slug: ['kinh-nghiem', 'experience'],
	},
	{
		name: 'Mua Xe',
		href: '/mua-xe',
		slug: ['buy-car', 'mua-xe'],
		children: [
			{
				name: 'Mua Xe Mới',
				href: '/mua-xe?trang-thai=xe-moi',
				slug: ['xe-moi', 'new-car'],
			},
			{
				name: 'Mua Xe Cũ',
				href: '/mua-xe?trang-thai=xe-cu',
				slug: ['xe-cu', 'old-car'],
			},
		],
	},
	{
		name: 'Khuyến Mại',
		href: '/khuyen-mai',
		slug: ['khuyen-mai', 'promotion'],
	},
	// {
	// 	name: 'Bảo Hiểm',
	// 	href: '/insurance',
	// 	slug: ['insurance'],
	// },
];

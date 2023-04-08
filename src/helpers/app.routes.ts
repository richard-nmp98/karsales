export const AppRoutes = {
	vehicleReview: '/danh-gia-xe',
	insurance: '/bao-hiem',
	carPrice: '/gia-xe',
	usedCarPrice: '/gia-xe-cu',
	buyCar: '/mua-xe',
	regulatoryPolicy: '/chinh-sach-quy-dinh',
	carAcademy: '/hoc-vien-oto',
	carAcademyChapterTheory: '/hoc-vien-oto/ly-thuyet/chuong',
	carAcademyTheory: '/ly-thuyet',
	carAcademyChapterSimulation: '/hoc-vien-oto/mo-phong/chuong',
	carAcademySimulation: '/mo-phong',
	carAcademyTestTheory: '/hoc-vien-oto/ly-thuyet/thi-thu',
	carAcademyTestSimulation: '/hoc-vien-oto/mo-phong/thi-thu',
	frequentlyAskedQuestions: '/cau-hoi-thuong-gap',
	promotion: 'khuyen-mai',
	brand: '/thuong-hieu',
	news: '/tin-tuc',
	video: '/video',
};

export const GetArchiveUrlByType = (type: string) => {
	let url: string = '';
	switch (type) {
		case 'news':
			url = AppRoutes.news;
			break;
		case 'review':
			url = AppRoutes.vehicleReview;
			break;
		case 'insurance':
			url = AppRoutes.insurance;
			break;
		case 'car-price':
			url = AppRoutes.carPrice;
			break;
		case 'used-car-price':
			url = AppRoutes.usedCarPrice;
			break;
		case 'buy-car':
			url = AppRoutes.buyCar;
			break;
		case 'promotion':
			url = AppRoutes.promotion;
			break;
		case 'regulatory-policy':
			url = AppRoutes.regulatoryPolicy;
			break;
		case 'car-academy':
			url = AppRoutes.carAcademy;
			break;
		case 'frequently-asked-questions':
			url = AppRoutes.frequentlyAskedQuestions;
			break;
		case 'video':
			url = AppRoutes.video;
			break;
		case 'brand':
			url = AppRoutes.brand;
			break;
		default:
			url = '/';
			break;
	}

	return url;
};

import React from 'react';
import SwiperCarousel from '@/components/Swiper/Carousel';

const MostViewNewsCarousel: React.FC = () => {
	const News = [
		{
			categories: {
				id: '1',
				nameVi: 'test',
				nameEn: 'test',
				slug: 'test',
				createdAt: '',
				updatedAt: '',
				total: 0,
			},
			createdAt: '',
			descriptionEn: '',
			id: '',
			isActive: false,
			mediaIds: [],
			nameEn: '',
			thumnail: 'https://kar-oto-app.s3.ap-southeast-1.amazonaws.com/uploads/1667817049139.jpg',
			nameVi: 'Hyundai Santa Fe Calligraphy 2021 - Đổi mới',
			descriptionVi:
				'So với phiên bản trước, Honda Civic Type R 2021 không có quá nhiều thay đổi, tuy nhiên lại có mức giá cao hơn 500 USD (khoảng 11,6 triệu đồng). Nhưng ở bản 2021, Honda Civic Type R đã bổ sung',
			updatedAt: '2021-08-12T09:00:00.000Z',
		},
		{
			categories: {
				id: '1',
				nameVi: 'test',
				nameEn: 'test',
				slug: 'test',
				createdAt: '',
				updatedAt: '',
				total: 0,
			},
			createdAt: '',
			descriptionEn: '',
			id: '',
			isActive: false,
			mediaIds: [],
			nameEn: '',
			thumnail: 'https://kar-oto-app.s3.ap-southeast-1.amazonaws.com/uploads/1667817049139.jpg',
			nameVi: 'Hyundai Santa Fe Calligraphy 2021 - Đổi mới',
			descriptionVi:
				'So với phiên bản trước, Honda Civic Type R 2021 không có quá nhiều thay đổi, tuy nhiên lại có mức giá cao hơn 500 USD (khoảng 11,6 triệu đồng). Nhưng ở bản 2021, Honda Civic Type R đã bổ sung',
			updatedAt: '2021-08-12T09:00:00.000Z',
		},
		{
			categories: {
				id: '1',
				nameVi: 'test',
				nameEn: 'test',
				slug: 'test',
				createdAt: '',
				updatedAt: '',
				total: 0,
			},
			createdAt: '',
			descriptionEn: '',
			id: '',
			isActive: false,
			mediaIds: [],
			nameEn: '',
			thumnail: 'https://kar-oto-app.s3.ap-southeast-1.amazonaws.com/uploads/1667817049139.jpg',
			nameVi: 'Hyundai Santa Fe Calligraphy 2021 - Đổi mới',
			descriptionVi:
				'So với phiên bản trước, Honda Civic Type R 2021 không có quá nhiều thay đổi, tuy nhiên lại có mức giá cao hơn 500 USD (khoảng 11,6 triệu đồng). Nhưng ở bản 2021, Honda Civic Type R đã bổ sung',
			updatedAt: '2021-08-12T09:00:00.000Z',
		},
		{
			categories: {
				id: '1',
				nameVi: 'test',
				nameEn: 'test',
				slug: 'test',
				createdAt: '',
				updatedAt: '',
				total: 0,
			},
			createdAt: '',
			descriptionEn: '',
			id: '',
			isActive: false,
			mediaIds: [],
			nameEn: '',
			thumnail: 'https://kar-oto-app.s3.ap-southeast-1.amazonaws.com/uploads/1667817049139.jpg',
			nameVi: 'Hyundai Santa Fe Calligraphy 2021 - Đổi mới',
			descriptionVi:
				'So với phiên bản trước, Honda Civic Type R 2021 không có quá nhiều thay đổi, tuy nhiên lại có mức giá cao hơn 500 USD (khoảng 11,6 triệu đồng). Nhưng ở bản 2021, Honda Civic Type R đã bổ sung',
			updatedAt: '2021-08-12T09:00:00.000Z',
		},
		{
			categories: {
				id: '1',
				nameVi: 'test',
				nameEn: 'test',
				slug: 'test',
				createdAt: '',
				updatedAt: '',
				total: 0,
			},
			createdAt: '',
			descriptionEn: '',
			id: '',
			isActive: false,
			mediaIds: [],
			nameEn: '',
			thumnail: 'https://kar-oto-app.s3.ap-southeast-1.amazonaws.com/uploads/1667817049139.jpg',
			nameVi: 'Hyundai Santa Fe Calligraphy 2021 - Đổi mới',
			descriptionVi:
				'So với phiên bản trước, Honda Civic Type R 2021 không có quá nhiều thay đổi, tuy nhiên lại có mức giá cao hơn 500 USD (khoảng 11,6 triệu đồng). Nhưng ở bản 2021, Honda Civic Type R đã bổ sung',
			updatedAt: '2021-08-12T09:00:00.000Z',
		},
		{
			categories: {
				id: '1',
				nameVi: 'test',
				nameEn: 'test',
				slug: 'test',
				createdAt: '',
				updatedAt: '',
				total: 0,
			},
			createdAt: '',
			descriptionEn: '',
			id: '',
			isActive: false,
			mediaIds: [],
			nameEn: '',
			thumnail: 'https://kar-oto-app.s3.ap-southeast-1.amazonaws.com/uploads/1667817049139.jpg',
			nameVi: 'Hyundai Santa Fe Calligraphy 2021 - Đổi mới',
			descriptionVi:
				'So với phiên bản trước, Honda Civic Type R 2021 không có quá nhiều thay đổi, tuy nhiên lại có mức giá cao hơn 500 USD (khoảng 11,6 triệu đồng). Nhưng ở bản 2021, Honda Civic Type R đã bổ sung',
			updatedAt: '2021-08-12T09:00:00.000Z',
		},
		{
			categories: {
				id: '1',
				nameVi: 'test',
				nameEn: 'test',
				slug: 'test',
				createdAt: '',
				updatedAt: '',
				total: 0,
			},
			createdAt: '',
			descriptionEn: '',
			id: '',
			isActive: false,
			mediaIds: [],
			nameEn: '',
			thumnail: 'https://kar-oto-app.s3.ap-southeast-1.amazonaws.com/uploads/1667817049139.jpg',
			nameVi: 'Hyundai Santa Fe Calligraphy 2021 - Đổi mới',
			descriptionVi:
				'So với phiên bản trước, Honda Civic Type R 2021 không có quá nhiều thay đổi, tuy nhiên lại có mức giá cao hơn 500 USD (khoảng 11,6 triệu đồng). Nhưng ở bản 2021, Honda Civic Type R đã bổ sung',
			updatedAt: '2021-08-12T09:00:00.000Z',
		},
	];
	const swiperOptions = {
		slidesPerView: 1,
		breakpoints: {
			1024: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
			640: {
				slidesPerView: 1,
			},
		},
	};
	return (
		<>
			<SwiperCarousel
				id={'most-view-review-carousel'}
				items={News}
				swiperOptions={swiperOptions}
				title={'Tin Xem nhiều'}
				archiveLink={'/danh-gia-xe'}
			/>
		</>
	);
};

export default MostViewNewsCarousel;

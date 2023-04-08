import React, { useState } from 'react';
import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb';
import dynamic from 'next/dynamic';
import Pagination from '@/components/Pagination';
import Carousel from '@/components/Carousel';
import { BannerPositionEnum } from '@/graphql/type.interface';
import { NextSeo } from 'next-seo';
import ExperienceSection1 from '@/components/Experience/Section-1';
import ExperienceSection2 from '@/components/Experience/Section-2';

const Experience: React.FC = () => {
	const [current] = useState<BreadcrumbItem>({ title: 'Kinh nghiệm' });
	const GridTemplate4 = dynamic(() => import('@/components/News/GridTemplate/Template-4'), {
		ssr: false,
	});

	const postReview = [
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
			thumnail: 'https://kar-oto-app.s3.ap-southeast-1.amazonaws.com/uploads/1675524198401.jpg',
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
			thumnail: 'https://kar-oto-app.s3.ap-southeast-1.amazonaws.com/uploads/1675524198401.jpg',
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
			thumnail: 'https://kar-oto-app.s3.ap-southeast-1.amazonaws.com/uploads/1675524198401.jpg',
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
			thumnail: 'https://kar-oto-app.s3.ap-southeast-1.amazonaws.com/uploads/1675524198401.jpg',
			nameVi: 'Hyundai Santa Fe Calligraphy 2021 - Đổi mới',
			descriptionVi:
				'So với phiên bản trước, Honda Civic Type R 2021 không có quá nhiều thay đổi, tuy nhiên lại có mức giá cao hơn 500 USD (khoảng 11,6 triệu đồng). Nhưng ở bản 2021, Honda Civic Type R đã bổ sung',
			updatedAt: '2021-08-12T09:00:00.000Z',
		},
	];

	return (
		<>
			<NextSeo title={'Kinh nghiệm'} description={'Kinh nghiệm'}></NextSeo>
			<Carousel position={BannerPositionEnum.WEBSITE_BODY} />
			<Breadcrumb current={current} />
			<ExperienceSection1 />
			<ExperienceSection2 />
			<div className="container my-6">
				<h3 className="text-secondary-500 font-semibold py-2 mb-2 cursor-pointer xl:text-[32px] sm:text-[20px] text-[24px]">
					Video
				</h3>
				<GridTemplate4
					archiveLink={'/kinh-nghiem'}
					className={'mb-5'}
					items={[...postReview, postReview[0], postReview[0]]}
				/>
				<div>
					<Pagination
						wrapperClassName={'text-right kar-pagination-small experience-pagination'}
						defaultCurrent={1}
						total={100}
						pageSize={10}
					/>
				</div>
			</div>
		</>
	);
};

export default Experience;

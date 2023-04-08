import React, { useState } from 'react';
import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb';
import dynamic from 'next/dynamic';
import CarouselBanner from '@/components/Carousel';
import { NextSeo } from 'next-seo';

const ContactPage: React.FC = () => {
	const DownloadApp = dynamic(() => import('@/modules/_/components/DownloadApp'), {
		ssr: false,
	});
	const ContactForm = dynamic(() => import('@/components/Form/Contact'), {
		ssr: false,
	});
	const [current] = useState<BreadcrumbItem>({ title: 'Liên hệ' });

	return (
		<>
			<NextSeo
				title={'Liên hệ'}
				description={'CÔNG TY TNHH KARSALE - Nền tảng mua bán xe ô tô trực tuyến và tiện ích cho người sở hữu xe.'}
			></NextSeo>
			<CarouselBanner />
			<Breadcrumb current={current} />
			<div className="container pt-6 pb-4 lg:pb-[190px]">
				<h1 className={`text-center text-secondary-500 text-4xl font-semibold mb-8`}>Liên hệ</h1>
				<div className={`lg:max-w-[1200px] grid grid-cols-12 gap-8 mx-auto`}>
					<div className={`col-span-12 lg:col-span-6`}>
						<h2 className={`text-secondary-500 text-2xl font-semibold mb-8`}>CÔNG TY TNHH KARSALE</h2>
						<p>Nền tảng mua bán xe ô tô trực tuyến và tiện ích cho người sở hữu xe.</p>
						<p>Karsales với phương châm là nền tảng:</p>
						<ul className={'list-disc ml-6 mb-4'}>
							<li>
								<strong>Mua nhanh - Bán gọn</strong>
							</li>
							<li>
								<strong>Bạn đồng hành cùng Anh/Chị sẽ và đang sở hữu xe ô tô với nhiều tiện ích</strong>
							</li>
							<li>
								<strong>Cải tiến liên tục</strong>
							</li>
						</ul>
						<p>
							<label>Giấy phép số: </label>
							<strong>2649/GP - TTĐT,</strong>
						</p>
						<p className={`mb-4`}>Sở Thông tin và Truyền thông HCM. Cấp ngày 28/8/2015.</p>
						{/*<div className={`border border-dashed`}></div>*/}
						<p className={'mt-4'}>
							<label>Địa chỉ: </label>
							<strong>123 Phan Đình Phùng, P6, Quận 3, Tp.HCM</strong>
						</p>
						<p>
							<label>Điện thoại: </label>
							<a className={`font-bold`} href={'tel:02447924688'}>
								024 47 924 688
							</a>
						</p>
						<p>
							<label>Email: </label>
							<a className={`font-bold`} href={'mailto:lienhe@karsale.com'}>
								lienhe@karsale.com
							</a>
						</p>
						<div className={'flex items-center mt-6'}>
							<label className={'pr-4'}>Theo dõi Karsales: </label>
							<a
								href={'https://www.facebook.com/karsales.asia'}
								target={'_blank'}
								rel="noreferrer"
								className={'inline-block mr-2'}
							>
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M10 18.75C14.8325 18.75 18.75 14.8325 18.75 10C18.75 5.16751 14.8325 1.25 10 1.25C5.16751 1.25 1.25 5.16751 1.25 10C1.25 14.8325 5.16751 18.75 10 18.75Z"
										fill="url(#paint0_linear_101_192)"
									/>
									<path
										d="M13.2586 12.676L13.6472 10.2063H11.2157V8.60438C11.2157 7.92856 11.5548 7.26944 12.6439 7.26944H13.75V5.16687C13.75 5.16687 12.7466 5 11.7877 5C9.78425 5 8.47606 6.18309 8.47606 8.324V10.2063H6.25V12.676H8.47606V18.6466C8.92294 18.715 9.38012 18.75 9.84587 18.75C10.3116 18.75 10.7689 18.715 11.2157 18.6466V12.676H13.2586Z"
										fill="white"
									/>
									<defs>
										<linearGradient
											id="paint0_linear_101_192"
											x1="10"
											y1="1.25"
											x2="10"
											y2="18.6981"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#18ACFE" />
											<stop offset="1" stopColor="#0163E0" />
										</linearGradient>
									</defs>
								</svg>
							</a>
							<a
								href={'https://www.facebook.com/karsales.asia'}
								target={'_blank'}
								rel="noreferrer"
								className={'inline-block mr-2'}
							>
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_101_197)">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M7.935 12.6124L7.93437 6.95319L13.3381 9.79257L7.935 12.6124ZM19.8 5.97253C19.8 5.97253 19.6044 4.58463 19.005 3.97345C18.2444 3.17092 17.3919 3.16714 17.0012 3.12056C14.2025 2.91662 10.0044 2.91663 10.0044 2.91663H9.99563C9.99563 2.91663 5.7975 2.91662 2.99875 3.12056C2.6075 3.16714 1.75563 3.17092 0.994377 3.97345C0.395002 4.58463 0.199998 5.97253 0.199998 5.97253C0.199998 5.97253 0 7.60276 0 9.23237V10.7606C0 12.3909 0.199998 14.0205 0.199998 14.0205C0.199998 14.0205 0.395002 15.4084 0.994377 16.0196C1.75563 16.8221 2.755 16.7969 3.2 16.8806C4.8 17.0355 10 17.0833 10 17.0833C10 17.0833 14.2025 17.077 17.0012 16.8731C17.3919 16.8259 18.2444 16.8221 19.005 16.0196C19.6044 15.4084 19.8 14.0205 19.8 14.0205C19.8 14.0205 20 12.3909 20 10.7606V9.23237C20 7.60276 19.8 5.97253 19.8 5.97253Z"
											fill="#CE1312"
										/>
									</g>
									<defs>
										<clipPath id="clip0_101_197">
											<rect width="20" height="20" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</a>
							<a
								href={'https://www.facebook.com/karsales.asia'}
								target={'_blank'}
								rel="noreferrer"
								className={'inline-block'}
							>
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M16.1011 4.63516C15.9745 4.56975 15.8513 4.49804 15.7319 4.42031C15.3848 4.1908 15.0665 3.92037 14.7839 3.61484C14.0768 2.80586 13.8128 1.98516 13.7155 1.41055H13.7194C13.6382 0.933594 13.6718 0.625 13.6769 0.625H10.4565V13.0773C10.4565 13.2445 10.4565 13.4098 10.4495 13.573C10.4495 13.5934 10.4476 13.6121 10.4464 13.634C10.4464 13.643 10.4464 13.6523 10.4444 13.6617C10.4444 13.6641 10.4444 13.6664 10.4444 13.6687C10.4105 14.1155 10.2673 14.5471 10.0274 14.9256C9.78746 15.304 9.45824 15.6177 9.06865 15.8391C8.66261 16.0701 8.20337 16.1912 7.73623 16.1906C6.23583 16.1906 5.01982 14.9672 5.01982 13.4562C5.01982 11.9453 6.23583 10.7219 7.73623 10.7219C8.02024 10.7216 8.30251 10.7663 8.57255 10.8543L8.57646 7.57539C7.75668 7.4695 6.92385 7.53465 6.13051 7.76673C5.33717 7.99882 4.60054 8.3928 3.96708 8.92383C3.41203 9.40609 2.9454 9.98152 2.58818 10.6242C2.45224 10.8586 1.93935 11.8004 1.87724 13.3289C1.83818 14.1965 2.09873 15.0953 2.22294 15.4668V15.4746C2.30107 15.6934 2.6038 16.4398 3.09716 17.0691C3.49499 17.5739 3.96501 18.0174 4.49208 18.3852V18.3773L4.4999 18.3852C6.05888 19.4445 7.7874 19.375 7.7874 19.375C8.08662 19.3629 9.08896 19.375 10.2272 18.8355C11.4897 18.2375 12.2085 17.3465 12.2085 17.3465C12.6677 16.8141 13.0328 16.2074 13.2882 15.5523C13.5796 14.7863 13.6769 13.8676 13.6769 13.5004V6.89414C13.7159 6.91758 14.2362 7.26172 14.2362 7.26172C14.2362 7.26172 14.9858 7.74219 16.1554 8.05508C16.9944 8.27773 18.1249 8.32461 18.1249 8.32461V5.12773C17.7288 5.1707 16.9245 5.0457 16.1011 4.63516Z"
										fill="black"
									/>
								</svg>
							</a>
						</div>
					</div>
					<div className={`col-span-12 lg:col-span-6`}>
						<h4 className={'mb-3 font-semibold'}>Liên hệ & Phản hồi với Karsales</h4>
						<ContactForm />
					</div>
				</div>
			</div>
			<DownloadApp />
		</>
	);
};

export default ContactPage;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import moment from 'moment';
import { CarouselSwiperProps } from '@/types';
import Item from '@/modules/_/components/VehiclesReview/Item';

const SwiperCarousel: React.FC<CarouselSwiperProps> = (props: CarouselSwiperProps) => {
	const { items, swiperOptions, title } = props;
	if (!props.id) {
		props.id = 'kar-swiper-carousel-' + moment().unix();
	}
	const id = props.id;
	return (
		<div id={id} className={'kar-swiper-carousel relative'}>
			{title && (
				<div className={'grid grid-cols-12 py-4'}>
					<div className={'col-span-12 md:col-span-6'}>
						<h3 className={'text-secondary-500 font-semibold'}>{title}</h3>
					</div>
					<div className={'col-span-12 md:col-span-6'}>
						<div className={'text-right'}>
							<div className="swiper-carousel-pagination"></div>
						</div>
					</div>
				</div>
			)}
			<Swiper
				modules={[Pagination, Navigation, Autoplay, A11y]}
				autoplay={{
					delay: 3000,
					pauseOnMouseEnter: true,
					disableOnInteraction: false,
				}}
				navigation={{
					nextEl: `#${id}` + ' .kar-swiper-button-next',
					prevEl: `#${id}` + ' .kar-swiper-button-prev',
				}}
				spaceBetween={30}
				slidesPerView={3}
				draggable={true}
				loop={true}
				pagination={{
					el: `#${id}` + ' .swiper-carousel-pagination',
					type: 'bullets',
					clickable: true,
				}}
				{...swiperOptions}
			>
				{items.map((item, index) => {
					return (
						<SwiperSlide key={index}>
							<Item
								postReview={item}
								showDescription={false}
								imagePosition={'top'}
								positionDateCommentView={'after-title'}
								{...props}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>

			<div className={'kar-swiper-button-prev swiper-button-prev after:!content-[""] !left-[-15px] !text-main-500'}>
				<span className={'bg-white rounded-full shadow-[0_0_4px_1px_#eee] p-1'}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-8 h-8"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>
				</span>
			</div>
			<div className={`kar-swiper-button-next swiper-button-next after:!content-[""] !right-[-15px] !text-main-500`}>
				<span className={'bg-white rounded-full shadow-[0_0_4px_1px_#eee] p-1'}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-8 h-8"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>
				</span>
			</div>
		</div>
	);
};

export default SwiperCarousel;

import React from 'react';
import SwiperCarousel from '@/components/Swiper/Carousel';
import { CarouselSwiperProps } from '@/types';

const RelatedNewsCarousel: React.FC<CarouselSwiperProps> = (props: CarouselSwiperProps) => {
	const { title = '', swiperOptions } = props;
	const _swiperOptions = Object.assign(
		{
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
		},
		swiperOptions,
	);
	return (
		<>
			<SwiperCarousel id={'related-review-carousel'} swiperOptions={_swiperOptions} title={title} {...props} />
		</>
	);
};

export default RelatedNewsCarousel;

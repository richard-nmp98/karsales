import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import { A11y, Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

export type SlideItem = {
	title?: string;
	thumbnail: string;
	link?: string;
	description?: string;
};

type Props = {
	id: string;
	items: SlideItem[];
	swiperOptions?: object;
};
const MainSlide: React.FC<Props> = ({ id, items, swiperOptions }: Props) => {
	return (
		<>
			<div id={id}>
				<Swiper
					modules={[Pagination, Navigation, Autoplay, A11y, EffectFade]}
					autoplay={{
						delay: 3000,
						pauseOnMouseEnter: true,
						disableOnInteraction: false,
					}}
					navigation={{
						nextEl: `#${id}` + ' .kar-swiper-button-next',
						prevEl: `#${id}` + ' .kar-swiper-button-prev',
					}}
					speed={1000}
					effect={'fade'}
					spaceBetween={0}
					slidesPerView={1}
					draggable={true}
					loop={true}
					cubeEffect={{
						shadow: true,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.94,
					}}
					pagination={{
						clickable: true,
					}}
					{...swiperOptions}
				>
					{items.map((item, index) => (
						<SwiperSlide key={index}>
							{item.link ? (
								<a href={item.link} target={'_blank'} rel={'noreferrer'}>
									<img className={'w-full'} src={item.thumbnail} alt={item?.title} />
								</a>
							) : (
								<img className={'w-full'} src={item.thumbnail} alt={item?.title} />
							)}
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};

export default MainSlide;

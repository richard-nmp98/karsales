import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import SwiperCore, { A11y, Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

export type SlideItem = {
	thumbnail: string;
};

type Props = {
	id: string;
	items: SlideItem[];
	swiperOptions?: object;
};

SwiperCore.use([Navigation]);

const PreviewProduct: React.FC<Props> = ({ id, items, swiperOptions }: Props) => {
	return (
		<>
			<div id={id} className="relative">
				<Swiper
					modules={[Pagination, Navigation, Autoplay, A11y, EffectFade]}
					navigation={{
						nextEl: `.preview-car-swiper-button-next`,
						prevEl: `.preview-car-swiper-button-prev`,
					}}
					speed={500}
					effect={'flip'}
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
							<div
								className="w-full sm:h-[300px] md:h-[400px] lg:h-[350px] xl:h-[350px] xxl:h-[400px] h-[200px] flex justify-center items-center"
								// style={{
								// 	background: 'white',
								// 	backgroundImage: `url(${item.thumbnail})`,
								// 	backgroundSize: 'auto 100%',
								// 	backgroundPosition: 'center',
								// 	backgroundRepeat: 'no-repeat',
								// }}
							>
								<img className={'h-full'} src={item.thumbnail} alt="karsales" />
							</div>
						</SwiperSlide>
					))}
					<button
						className="preview-car-swiper-button-prev absolute p-[10px] bg-[#c5c5c592] rounded-full top-1/2 left-[10px] z-50 flex justify-center items-center"
						style={{ transform: 'translateY(-50%)' }}
					>
						<LeftOutlined classID="text-[50px]" style={{ color: '#FB4E4C' }} />
					</button>
					<button
						className="preview-car-swiper-button-next absolute p-[10px] bg-[#c5c5c592] rounded-full top-1/2 right-[10px] z-50 flex justify-center items-center"
						style={{ transform: 'translateY(-50%)' }}
					>
						<RightOutlined classID="text-[50px]" style={{ color: '#FB4E4C' }} />
					</button>
				</Swiper>
			</div>
		</>
	);
};

export default PreviewProduct;

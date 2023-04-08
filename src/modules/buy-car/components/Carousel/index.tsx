import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel, Image } from 'antd';
import React, { memo, useState } from 'react';
import { Wrapper } from './styled';

const CarouselComponent = ({ slide }: any) => {
	const [currentSlide, setCurrentSlide] = useState(1);
	const [visible, setVisible] = useState(false);

	let carouselRef: any = null;

	return (
		<>
			<Wrapper className="carousel relative">
				<div className="hidden">
					<Image.PreviewGroup
						preview={{
							visible,
							onVisibleChange: (value) => {
								setVisible(value);
							},
						}}
					>
						{slide.map((item: any, index: any) => (
							<Image key={index} src={item.image_url} alt="" />
						))}
					</Image.PreviewGroup>
				</div>
				<Carousel
					className="w-full"
					ref={(ref) => (carouselRef = ref)}
					afterChange={(current) => setCurrentSlide(current)}
				>
					{slide.map((item: any, index: any) => (
						<div key={index} className="relative">
							<div className="h-[400px] image-carousel-preview flex items-center justify-center bg-[#fafafa] rounded">
								<div
									onClick={() => setVisible(true)}
									className="w-full h-full"
									style={{
										background: `url('${item.image_url}')`,
										backgroundPosition: 'center',
										backgroundSize: 'cover',
									}}
								/>
							</div>
						</div>
					))}
				</Carousel>
				<div
					className="next absolute top-2/4 right-[5px] translate-y-[-50%] rounded-full p-[5px] box-border cursor-pointer"
					onClick={() => carouselRef.next()}
				>
					<RightOutlined style={{ color: '#FB4E4C', fontSize: '50px' }} />
				</div>
				<div
					className="prev absolute top-2/4 left-[5px] translate-y-[-50%] rounded-full p-[5px] box-border cursor-pointer"
					onClick={() => carouselRef.prev()}
				>
					<LeftOutlined style={{ color: '#FB4E4C', fontSize: '50px' }} />
				</div>
				<div className="current-slide absolute bottom-0 right-0 bg-[#ffffff89] p-[10px] box-border font-normal text-xl">
					{currentSlide + 1}/{slide.length}
				</div>
			</Wrapper>
		</>
	);
};

export default memo(CarouselComponent);

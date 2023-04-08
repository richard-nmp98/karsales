import DownloadApp from '@/components/DownloadApp';
import React, { memo } from 'react';
import { Wrapper } from './styled';

const DownloadAppHome: React.FC = () => {
	return (
		<>
			<Wrapper className="flex items-center">
				<div className="container box-border py-8">
					<div className="grid grid-cols-2 gap-[20px] items-end relative">
						<div className="item flex items-center lg:justify-center h-full lg:col-span-1 col-span-2 relative">
							<div className="grid grid-cols-12 sssm:flex gap-[10px] lg:gap-[10px] xl:gap-[14px] lg:absolute relative review-mobile-app">
								<img className="col-span-4 sssm:w-[152px]" src="/images/home-page/app-v1.svg" alt="" />
								<img className="col-span-4 sssm:w-[152px]" src="/images/home-page/app-v2.svg" alt="" />
								<img className="col-span-4 sssm:w-[152px]" src="/images/home-page/app-v3.svg" alt="" />
							</div>
						</div>
						<div className="item flex items-center h-full lg:col-span-1 col-span-2">
							<div>
								<p className="name font-bold text-4xl text-pink-main italic mb-[15px]">KARSALES</p>
								<p className="text font-bold text-base">Mua và bán xe theo cách của bạn !</p>
								<div className="text-left mb-3 text-base mb-[27px]">
									Đăng kí để trở thành
									<span className="font-bold text-base">&nbsp;Người đầu tiên&nbsp;</span>
									sử dụng
									<span className="font-bold text-base">&nbsp;KAR&nbsp;</span>
									miễn phí !
								</div>
								<div className="flex justify-start items-center gap-3">
									<DownloadApp />
								</div>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default memo(DownloadAppHome);

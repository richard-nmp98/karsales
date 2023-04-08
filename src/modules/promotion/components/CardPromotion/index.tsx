import Link from 'next/link';
import React, { memo } from 'react';
import { Wrapper } from './styled';

const NewPromotion: React.FC = () => {
	return (
		<>
			<Wrapper className="w-full rounded overflow-hidden">
				<Link href="/mua-xe/xe-moi/ford/everest/ford-everest-2021">
					<div className="header relative">
						<div className="overflow-hidden title relative w-full py-[17px] flex box-border bg-blue-main justify-center items-center">
							<p className="text-white font-bold text-base">FORD EVEREST 2021</p>
						</div>
					</div>
					<div className="body py-[19px] px-[29px] box-border w-full">
						<div className="price text-center">
							<p className="font-bold text-pink-main text-2xl">89.000.000 đ</p>
						</div>
						<div className="line w-full border-dashed border-[0.5px] border-[#E2E2E2] my-[11px]" />
						<div className="w-full flex justify-center">
							<div className="list-items">
								<div className="item flex items-center box-border text-blue-text gap-[5px]">
									<img src="/images/icons/dropdown.svg" className="rotate-[-90deg]" alt="" />
									<p className="font-normal text-[11px]">Giảm tiền mặt trực tiếp</p>
								</div>
								<div className="item flex items-center box-border text-blue-text gap-[5px]">
									<img src="/images/icons/dropdown.svg" className="rotate-[-90deg]" alt="" />
									<p className="font-normal text-[11px]">Hỗ trợ lệ phí trước bạ</p>
								</div>
							</div>
						</div>
						<div className="line w-full border-dashed border-[0.5px] border-[#E2E2E2] my-[11px]" />
						<div className="list-items">
							<div className="item flex items-center justify-center px-[20px] box-border text-blue-text gap-[5px]">
								<img src="/images/icons/year.svg" className="w-[8px]" alt="" />
								<p className="font-normal text-[11px]">Tân Phú , Hồ Chí Minh</p>
							</div>
							<div className="item flex items-center justify-center px-[20px] box-border text-[#797979] gap-[5px]">
								<img src="/images/icons/location.svg" alt="" />
								<p className="font-normal text-[11px]">
									Ngày kết thúc :<span className="time text-pink-main">31/03/2022</span>
								</p>
							</div>
						</div>
						<div className="flex justify-center items-center pt-[4px]">
							<img
								className="w-full"
								src="https://nftstorage.link/ipfs/bafkreibhriaxqplkbbvvnoe5dzw6k3me4iwiitp2lpaz33v73altoby4bm"
								alt=""
							/>
						</div>
					</div>
				</Link>
			</Wrapper>
		</>
	);
};

export default memo(NewPromotion);

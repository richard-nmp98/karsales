import DownloadApp from '@/components/DownloadApp';
import DownloadAppModal from '@/components/Popup/DownloadApp';
import { detectPlatformDirectionApp } from '@/helpers/common';
import { LINK_DOWN_APP } from '@/helpers/constant';
import Link from 'next/link';
import React, { memo, useEffect, useState } from 'react';
import { Wrapper } from './styled';

type ColorType = {
	color?: string | '#FB4E4C';
	background?: string | '#fff';
};

type DirectionIntroduceType = {
	text: string | null;
	href: string | null;
	color?: ColorType;
	disabled?: boolean;
};

const Introduce: React.FC = () => {
	const [directionIntroduce] = useState<DirectionIntroduceType[]>([
		{
			text: 'MUA XE MỚI',
			href: '/mua-xe?trang-thai=xe-moi',
			color: {
				background: '#003DC6',
				color: '#fff',
			},
		},
		{
			text: 'MUA XE CŨ',
			href: '/mua-xe?trang-thai=xe-cu',
			color: {
				background: '#FB4E4C',
				color: '#fff',
			},
		},
	]);

	const [directStore, setDirectStore] = useState({
		text: 'CHPlay',
		link: LINK_DOWN_APP.googlePlay,
	});

	useEffect(() => {
		const direct = detectPlatformDirectionApp();
		setDirectStore(direct);
	}, []);

	return (
		<>
			<Wrapper>
				<div className="background w-full h-full flex items-center justify-center">
					<div className="pt-5">
						<div className="flex justify-center text-center mb-[13px] px-[10px] box-border">
							<span>
								<span className="title text-[#003DC6] font-semibold text-2xl">
									Rất nhiều mẫu xe đang được giao dịch trên
								</span>
								<span className="font-bold italic text-pink-main font-bold text-3xl">&nbsp;KARSALES</span>
							</span>
						</div>

						<div className="download-app">
							<div className="text-center mb-3 px-[10px] box-border">
								Đăng kí để trở thành
								<span className="font-bold">&nbsp;Người đầu tiên&nbsp;</span>
								sử dụng
								<span className="font-bold">&nbsp;KAR&nbsp;</span>
								miễn phí !
							</div>
							<div className="flex justify-center items-center gap-3">
								<DownloadApp />
							</div>
						</div>

						<div className="group-button m-auto flex justify-center items-center gap-[10px] flex-wrap">
							{directionIntroduce?.map((item, index) => (
								<Link
									key={index}
									className={`${[
										'action-intro',
										'block',
										`text-[${item?.color?.color}]`,
										'font-bold',
										'flex',
										'items-center',
										'gap-x-3.5',
										'read-more',
										'justify-center',
										'w-auto',
										'h-auto',
										'py-[8px]',
										'px-[14px]',
										'rounded',
										'text-[12px]',
										'md:w-[240px]',
										'md:h-[60px]',
										'md:p-0',
										'ssm:py-[10px]',
										'ssm:px-[20px]',
										'ssm:text-sm',
									].join(' ')}`}
									style={{ background: item?.color?.background }}
									href={`/${item.href}`}
								>
									{item?.text}
								</Link>
							))}
							<DownloadAppModal storeText={directStore.text} link={directStore.link}>
								<p
									className={`${[
										'action-intro',
										'block',
										`text-[#000]`,
										'text-[12px]',
										'font-bold',
										'flex',
										'items-center',
										'gap-x-3.5',
										'read-more',
										'justify-center',
										'w-auto',
										'h-auto',
										'py-[8px]',
										'px-[14px]',
										'rounded',
										'cursor-pointer',
										'md:w-[240px]',
										'md:h-[60px]',
										'md:p-0',
										'ssm:py-[10px]',
										'ssm:px-[20px]',
										'ssm:text-sm',
									].join(' ')}`}
									style={{ background: '#FFD726' }}
								>
									BÁN XE
								</p>
							</DownloadAppModal>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default memo(Introduce);

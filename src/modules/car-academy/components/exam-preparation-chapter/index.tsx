import React, { memo } from 'react';
import { Wrapper } from './styled';
import Link from 'next/link';

interface Chapter {
	link: string;
	value: string;
	text: string;
}

type Props = {
	chapter?: Chapter[];
	link?: string;
};

const ExamPreparationChapter: React.FC<Props> = (props) => {
	return (
		<>
			<Wrapper className="sm:mb-0 mb-[20px]">
				<div className="title">
					<p className="font-normal lg:text-[32px] sm:text-[24px] text-[20px] text-blue-main mb-[20px]">
						Ôn tập theo chương
					</p>
				</div>
				<div className="list-exam w-full grid grid-cols-12 sm:gap-y-[10px] gap-y-3 gap-x-3">
					{props?.chapter?.map((item, index) => (
						<Link
							className="sm:col-span-12 sssm:col-span-6 col-span-12 lg:text-[18px] sm:text-[16px] sssm:text-sm font-bold text-white lg:py-[13px] py-[10px] xl:px-[30px] lg:px-[15px] md:px-[30px] sm:px-[15px] px-[10px] flex items-center bg-pink-main rounded"
							href={`${props.link}/${item.link}`}
							key={index}
						>
							{item.text}
						</Link>
					))}
				</div>
			</Wrapper>
		</>
	);
};

export default memo(ExamPreparationChapter);

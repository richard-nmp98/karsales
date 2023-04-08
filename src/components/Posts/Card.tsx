import { PostEntity } from '@/graphql/type.interface';
import { formatCurrency } from '@/helpers/common';
import Link from 'next/link';
import React, { memo } from 'react';
import Specifications from './Specifications';

type Props = {
	post: PostEntity;
};

const Card: React.FC<Props> = (props) => {
	return (
		<Link
			href={`/mua-xe/${props.post?.slug ?? props.post?.id}`}
			className="grid grid-cols-8 h-full card rounded overflow-hidden"
		>
			<div className="md:col-span-4 ssm:col-span-8 sssm:col-span-4 col-span-8 md:h-full ssm:h-[172px] sssm:h-full h-[172px]">
				<div
					style={{
						backgroundImage: `url(${props.post?.medias ? props.post?.medias[0]?.mediaDetail?.filePathOriginal : ''})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}
					className="w-full h-full"
				/>
			</div>
			<div className="md:col-span-4 ssm:col-span-8 sssm:col-span-4 col-span-8 p-[8px] box-border relative">
				<div className="title mb-[16px]">
					<p className="font-bold text-md leading-[22px]">{props.post?.title}</p>
				</div>
				<div className="price mb-[8px]">
					<span>
						<span className="font-bold text-base text-[#003DC6]">
							{props.post?.showHiddenPrice ? (
								props.post?.hiddenPrice?.toLowerCase()
							) : (
								<>{Number(props.post?.price)?.toLocaleString('it-IT')}</>
							)}
						</span>
						<span className="text-xs">&nbsp;{formatCurrency(props.post?.currency ?? '').toLowerCase()}</span>
					</span>
				</div>
				<Specifications specifications={props.post} />
			</div>
		</Link>
	);
};

export default memo(Card);

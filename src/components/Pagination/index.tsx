import React from 'react';
// import Link from 'next/link';
import { Pagination as AntdPagination, PaginationProps } from 'antd';

interface Props extends PaginationProps {
	karShowTotal?: boolean;
	wrapperClassName?: string;
}

const Pagination: React.FC<Props> = (props) => {
	const { wrapperClassName = '' } = props;
	return (
		<div className={`kar-pagination ${wrapperClassName}`}>
			<div>
				<AntdPagination
					nextIcon={
						<span className={'next'}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-4 h-4"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
							</svg>
						</span>
					}
					prevIcon={
						<span className={'prev'}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-4 h-4"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
							</svg>
						</span>
					}
					{...props}
				/>
			</div>
			{(props.karShowTotal || false) && (
				<div className={`hidden md:block`}>
					<p className="text-sm text-gray-500 uppercase font-semibold whitespace-nowrap">
						Trang <span className="text-[#003DC6]">{props.current}</span> của{' '}
						<span className="text-main-500">{Math.ceil((props.total as number) / (props.pageSize as number))}</span>
					</p>
				</div>
			)}
		</div>
	);
};

export default Pagination;

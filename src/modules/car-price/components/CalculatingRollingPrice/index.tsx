import React, { memo } from 'react';
import { Wrapper } from './styled';
import CalculatingRollingPriceComponent from '@/components/CalculatingRollingPrice';
import Brand from '@/components/Brand';
import { AppRoutes } from '@/helpers/app.routes';
import { useRouter } from 'next/router';

const CalculatingRollingPrice: React.FC = () => {
	const router = useRouter();

	return (
		<>
			<Wrapper>
				<div className="price-detail gap-[17px] w-full grid grid-cols-12">
					<div className="col-span-12">
						<div className="col-span-12">
							<div className="grid grid-cols-12 gap-[15px]">
								<div className="sm:col-span-8 col-span-12">
									<p className="italic font-normal text-sm text-left mb-10">
										* Chi phí dưới đây là <span className="text-pink-main">ước tính</span> , đây là một số chi phí cố
										định mà bạn buộc phải trả khi mua và đăng ký xe. Các chi phí khác có thể phát sinh (và không bắt
										buộc) trong quá trình đăng ký xe.{' '}
									</p>
								</div>
							</div>
						</div>
						<div className="grid grid-cols-12 gap-[15px]">
							<CalculatingRollingPriceComponent />
							<div className="links ssm:flex grid gap-5 mt-[10px] lg:justify-start justify-center col-span-12">
								<button
									onClick={() => {
										const as: any = undefined;
										router.replace(
											{
												pathname: AppRoutes.carPrice,
												query: {
													...router.query,
													tab: 'du-toan-tra-gop',
												},
											},
											as,
											{ shallow: true },
										);
									}}
									className="py-2.5 px-6 bg-[#FFD726] rounded text-black font-bold text-base"
									style={{ border: 0 }}
								>
									Ưu đãi trả góp
								</button>
							</div>
						</div>
						<div className="line w-full h-[1px] bg-[#E2E2E2] mt-[39px] mb-[40px]" />
						<Brand gridCols="md:grid-cols-6 grid-cols-4" maxData={18} />
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default memo(CalculatingRollingPrice);

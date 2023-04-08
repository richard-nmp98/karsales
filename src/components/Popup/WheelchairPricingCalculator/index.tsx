import React, { memo, ReactNode, useState } from 'react';
import { Wrapper } from './styled';
import { Modal } from 'antd';
import CalculatingRollingPrice from '@/components/CalculatingRollingPrice';

interface Props {
	children: ReactNode;
}

const WheelchairPricingCalculator: React.FC<Props> = ({ children }) => {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			<Wrapper className="modal">
				<div onClick={() => setModalOpen(true)}>{children}</div>
				<Modal
					title=""
					centered
					open={modalOpen}
					onCancel={() => setModalOpen(false)}
					footer={null}
					closeIcon={<img src="/images/icons/close.svg" alt="" />}
					className="max-w-[820px] w-100-important"
				>
					<div className="md:px-20 sm:px-10 ssm:px-5 px-2 py-10 box-border">
						<div className="grid grid-cols-1 gap-[10px]">
							<p className="font-bold sm:text-5xl text-3xl text-blue-text text-center mb-[22px]">
								Tính giá xe lăn bánh
							</p>
							<p className="italic font-normal text-sm text-center mb-10">
								* Chi phí dưới đây là <span className="text-pink-main">ước tính</span> , đây là một số chi phí cố định
								mà bạn buộc phải trả khi mua và đăng ký xe. Các chi phí khác có thể phát sinh (và không bắt buộc) trong
								quá trình đăng ký xe.{' '}
							</p>
						</div>
						<div className="col-span-12">
							<CalculatingRollingPrice />
						</div>
					</div>
				</Modal>
			</Wrapper>
		</>
	);
};

export default memo(WheelchairPricingCalculator);

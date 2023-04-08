import React, { ReactNode, useState } from 'react';
import { Modal } from 'antd';

interface Props {
	storeText: string;
	link: string;
	children: ReactNode;
}

const DownloadAppModal: React.FC<Props> = ({ storeText, link, children }) => {
	const [modalOpen, setModalOpen] = useState(false);
	return (
		<>
			<div>
				<div onClick={() => setModalOpen(true)}>{children}</div>
				<Modal
					title=""
					centered
					open={modalOpen}
					onCancel={() => setModalOpen(false)}
					footer={null}
					closeIcon={<img src="/images/icons/close.svg" alt="" />}
					className="max-w-[500px] w-100-important"
				>
					<div className={'text-center py-10'}>
						<h3 className={`text-3xl font-bold text-main-500 italic mb-4`}>KARSALES</h3>
						<p className={`py-4 text-secondary-500 font-semibold`}>
							Bạn sẽ được điều hướng khỏi&nbsp;
							<a className={'text-main-500'} href="/">
								Karsales
							</a>{' '}
							để đến{' '}
							<a className={'text-main-500'} href={link} target="_blank" rel="noreferrer">
								{storeText}
							</a>
						</p>
						<button
							className={'bg-secondary-500 text-white px-6 py-1 rounded-[5px]'}
							onClick={() => {
								window.open(link);
							}}
						>
							Tiếp tục
						</button>
					</div>
				</Modal>
			</div>
		</>
	);
};

export default DownloadAppModal;

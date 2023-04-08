import React, { ReactNode, useState } from 'react';
import { Dropdown, MenuProps, Modal, Space } from 'antd';
import { menuConfig } from '@/components/Header/config';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
	children: ReactNode;
};
const MenuHeaderMobile: React.FC<Props> = ({ children }) => {
	const [modalOpen, setModalOpen] = useState(false);

	const router = useRouter();

	const extractPath = (path: string) => {
		const splitPath = path.split('/');
		const extractedPath = splitPath[1];

		// Check if there is only one segment in the path
		if (splitPath.length === 2) {
			return extractedPath;
		}

		// Check if the second segment is an empty string
		// if (splitPath[2] !== '') {
		// 	extractedPath += `/${splitPath[2]}`;
		// }

		return extractedPath;
	};
	return (
		<>
			<div id={'aaa'} className={''}>
				<div onClick={() => setModalOpen(true)}>{children}</div>
				<Modal
					title=""
					centered
					open={modalOpen}
					onCancel={() => setModalOpen(false)}
					footer={null}
					closeIcon={
						<span className={'text-white'}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-8 h-8"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</span>
					}
					className="max-w-[100%] modal-rounded-0 modal-bg-main-500"
				>
					<div className={'w-screen h-screen'}>
						<nav className={`nav px-2 pt-2 pb-4 md:flex md:p-0 lg:gap-[20px] md:gap-[10px]`}>
							{menuConfig.map((item, index) => {
								const items: MenuProps['items'] = item?.children?.map((item) => {
									return {
										label: (
											<Link
												key={index}
												href={item?.href}
												className={`${
													item?.slug.indexOf(extractPath(router.asPath)) !== -1 ? 'active' : ''
												} link block lg:font-bold md:font-semibold font-bold text-[#fff] lg:text-lg md:text-base text-lg py-3 whitespace-nowrap`}
											>
												{item?.name}
											</Link>
										),
										key: index,
									};
								});
								return item?.children ? (
									<Dropdown overlayClassName="dropdown-cus" menu={{ items }}>
										<a href={'/'} onClick={(e) => e.preventDefault()}>
											<Space
												className={`${
													item?.slug.indexOf(extractPath(router.asPath)) !== -1 ? 'active' : ''
												} link block lg:font-bold md:font-semibold font-bold text-[#fff] lg:text-lg md:text-base text-lg py-3 whitespace-nowrap`}
											>
												{item?.name}
											</Space>
										</a>
									</Dropdown>
								) : (
									<Link
										key={index}
										href={item?.href}
										className={`${
											item?.slug.indexOf(extractPath(router.asPath)) !== -1 ? 'active' : ''
										} link block lg:font-bold md:font-semibold font-bold text-[#fff] lg:text-lg md:text-base text-lg py-3 whitespace-nowrap`}
									>
										{item?.name}
									</Link>
								);
							})}
						</nav>
					</div>
				</Modal>
			</div>
		</>
	);
};

export default MenuHeaderMobile;

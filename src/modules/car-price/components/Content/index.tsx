import { AppRoutes } from '@/helpers/app.routes';
import { handleObjectQuery } from '@/helpers/common';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import CalculatingRollingPrice from '../CalculatingRollingPrice';
import InstallmentEstimate from '../InstallmentEstimate';
import ListedPrice from '../ListedPrice';
import { Wrapper } from './styled';

type TabType = {
	label: string;
	component: ReactNode;
	slug: string;
};

const Tab = ({ children, activeTab, setActiveTab }: any) => {
	const router = useRouter();
	const { tab } = router.query;

	/* eslint-disable */
	useEffect(() => {
		const tabIndex = children?.findIndex((item: any) => item?.props?.slug === tab);
		if (tabIndex !== -1) {
			setActiveTab(tabIndex);
		}
	}, [tab]);
	/* eslint-enable */

	return (
		<div className="pb-[9px] flex flex-col">
			<Wrapper className="overflow-hidden">
				<div className="tab-cus flex mb-4 ssm:gap-[31px] gap-[20px] overflow-x-auto">
					{children.map((tab: any, index: any) => (
						<div
							key={index}
							className={`${
								activeTab === index
									? 'text-[#003DC6] font-bold tab-active'
									: 'text-[#797979] hover:text-[#003DC6] font-normal '
							} py-2 cursor-pointer xl:text-[32px] sm:text-[20px] text-[16px] uppercase tab whitespace-nowrap`}
							onClick={() => {
								handleObjectQuery(router, 'tab', tab?.props?.slug, AppRoutes.carPrice);
							}}
						>
							{tab.props.label}
						</div>
					))}
				</div>
			</Wrapper>
			<div>{children[activeTab]}</div>
		</div>
	);
};

const TabPane = ({ label, children }: any) => {
	return <div>{children}</div>;
};

const Tabs = ({ setCurrentBreadcrumb }: any) => {
	const [activeTab, setActiveTab] = useState(0);

	const [tabs] = useState<TabType[]>([
		{
			label: 'Giá Niêm Yết',
			component: <ListedPrice />,
			slug: 'gia-niem-yet',
		},
		{
			label: 'Tính Giá Lăn Bánh',
			component: <CalculatingRollingPrice />,
			slug: 'gia-lan-banh',
		},
		{
			label: 'Dự Toán Trả Góp',
			component: <InstallmentEstimate />,
			slug: 'du-toan-tra-gop',
		},
	]);

	/* eslint-disable */
	useEffect(() => {
		setCurrentBreadcrumb({ title: tabs[activeTab]?.label });
	}, [activeTab]);
	/* eslint-enable */

	return (
		<>
			<Tab activeTab={activeTab} setActiveTab={setActiveTab}>
				{tabs?.map((item, index) => (
					<TabPane label={item?.label} slug={item?.slug} key={index}>
						{item?.component}
					</TabPane>
				))}
			</Tab>
		</>
	);
};

export default Tabs;

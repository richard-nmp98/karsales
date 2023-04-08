import React, { memo, ReactNode, useState } from 'react';
import { Drawer } from 'antd';
import { menuConfig } from '@/components/Header/config';
import NavigationRecursive from '@/components/Navigation';

type Props = {
	children: ReactNode;
};
const MenuHeaderMobileDrawer: React.FC<Props> = ({ children }) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div onClick={() => setOpen(true)}>{children}</div>
			<Drawer
				title="KARSALES"
				placement="right"
				open={open}
				width={'100%'}
				onClose={() => setOpen(false)}
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
				className="max-w-[100%] !bg-main-500 kar-drawer-menu-mobile"
			>
				<div className={'w-screen1 h-screen1'}>
					<nav className={'menu-main menu-main-mobile'}>
						<NavigationRecursive
							navigations={menuConfig}
							iconHasChildren={'<span class="kar-icon-sub"></span>'}
							iconHasChildrenDeep={'<span class="kar-icon-sub"></span>'}
						/>
					</nav>
				</div>
			</Drawer>
		</>
	);
};

export default memo(MenuHeaderMobileDrawer);

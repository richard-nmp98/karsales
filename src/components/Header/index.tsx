import React, { memo } from 'react';
import Link from 'next/link';
// import { LinkCustom, Logo, Nav, WrapLink, Wrapper } from "./styled";
import { menuConfig } from './config';
import { Wrapper } from './styled';
import MenuHeaderMobileDrawer from '@/components/Drawer/MenuHeaderMobile';
import NavigationRecursive from '@/components/Navigation';

const Header = () => {
	return (
		<Wrapper>
			<header className={`header-main bg-pink-main header-sticky`}>
				<div className="container lg:flex md:justify-between md:items-center md:px-4 gap-[10px] box-border">
					<div className="flex items-center justify-between px-4 py-3 md:p-0">
						<div className="md:py-3">
							<Link href="/" className="text-white lg:text-4xl text-4xl font-bold italic">
								KARSALES
							</Link>
						</div>
						<div className={`block lg:hidden`}>
							<MenuHeaderMobileDrawer>
								<button
									type="button"
									className="h-[20px] w-[20px] flex items-center text-gray-500 hover:text-white focus:text-white focus:outline-none"
								>
									<img src="/images/icons/open-menu.svg" className="w-full h-full" alt="" />
								</button>
							</MenuHeaderMobileDrawer>
						</div>
					</div>
					<nav className={'menu-main hidden lg:block'}>
						<NavigationRecursive navigations={menuConfig} />
					</nav>
				</div>
			</header>
		</Wrapper>
	);
};

export default memo(Header);

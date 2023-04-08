import React, { useState } from 'react';
import { useRouter } from 'next/router';

type NavigationItemProps = {
	name: string;
	href?: string;
	slug?: any[];
	children?: NavigationItemProps[];
};

type NavigationRecursiveProps = {
	navigations: NavigationItemProps[];
	level?: number;
	classNameWrapper?: string;
	classNameSubNavigation?: string;
	iconHasChildren?: string;
	iconHasChildrenDeep?: string;
	// onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;
};

const NavigationRecursive: React.FC<any> = ({
	navigations,
	level = 0,
	classNameWrapper = '',
	classNameSubNavigation = '',
	iconHasChildren = '',
	iconHasChildrenDeep = '',
}: // onClick,
NavigationRecursiveProps) => {
	const router = useRouter();
	const [expanded, setExpanded] = useState({});

	const extractPath = (path: string) => {
		const splitPath = path.split('/');
		const extractedPath = splitPath[1];
		// Check if there is only one segment in the path
		if (splitPath.length === 2) {
			return extractedPath;
		}

		return extractedPath;
	};
	router.events?.on('routeChangeComplete', () => {
		setExpanded({});

		return () => {
			router.events?.off('routeChangeComplete', () => {
				setExpanded({});
			});
		};
	});

	return (
		<>
			{navigations?.length > 0 && (
				<ul className={`kar-navigation ` + (level > 0 ? `sub-navigation ${classNameSubNavigation}` : classNameWrapper)}>
					{navigations.map((item, index) => {
						const isChildren = item?.children?.length;
						return (
							<li
								onClick={(ev) => {
									if (isChildren) {
										ev.preventDefault();
									}
									setExpanded(expanded === item ? '' : item);
								}}
								key={index}
								className={`navigation-item ${
									(item?.slug || []).indexOf(extractPath(router.asPath)) !== -1 ? 'navigation-item-current' : ''
								}${isChildren ? ' kar-has-sub-navigation' : ''} ${expanded === item ? ' active' : ''}`}
							>
								<a href={item?.href || '/#'} title={item.name}>
									<span>{item.name}</span>
									{isChildren && (
										<span
											className={'icon'}
											dangerouslySetInnerHTML={{ __html: level > 0 ? iconHasChildrenDeep : iconHasChildren }}
										></span>
									)}
								</a>
								{isChildren && <NavigationRecursive navigations={item.children} level={level + 1} />}
							</li>
						);
					})}
				</ul>
			)}
		</>
	);
};

export default NavigationRecursive;

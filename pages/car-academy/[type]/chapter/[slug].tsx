import { AppRoutes } from '@/helpers/app.routes';
import Simulation from '@/modules/car-academy/chapters/simulation';
import Theory from '@/modules/car-academy/chapters/theory';
import { useRouter } from 'next/router';
import React, { memo, useEffect } from 'react';

const Character: React.FC = () => {
	const router = useRouter();

	/* eslint-disable */
	useEffect(() => {
		if (router && router.query && router.query.type && router.isReady) {
			switch (`/${router.query.type}`) {
				case AppRoutes.carAcademyTheory:
				case AppRoutes.carAcademySimulation:
					break;
				default:
					router.push(AppRoutes.carAcademy);
					break;
			}
		}
	}, []);
	/* eslint-enable */

	return (
		<>
			{router && router.query && router.query.type && router.isReady ? (
				`/${router.query.type}` === AppRoutes.carAcademyTheory ? (
					<Theory />
				) : (
					<Simulation />
				)
			) : (
				<></>
			)}
		</>
	);
};

export default memo(Character);

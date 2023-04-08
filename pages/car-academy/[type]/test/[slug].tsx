import { AppRoutes } from '@/helpers/app.routes';
import { useRouter } from 'next/router';
import React, { memo, useEffect } from 'react';
import Simulation from '@/modules/car-academy/test/simulation';
import Theory from '@/modules/car-academy/test/theory';

const Test: React.FC = () => {
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

export default memo(Test);

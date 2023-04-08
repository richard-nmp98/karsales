import { useRouter } from 'next/router';
import React, { memo } from 'react';
import CarDetail from 'src/modules/buy-car/view';

const BuyCar: React.FC = () => {
	const router: any = useRouter();
	const { slug }: any = router?.query ?? '';

	return <>{slug ? <CarDetail /> : <></>}</>;
};

export default memo(BuyCar);

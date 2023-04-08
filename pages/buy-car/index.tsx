import React, { memo } from 'react';
import CarComponent from 'src/modules/buy-car';

const BuyCar: React.FC = () => {
	return (
		<>
			<CarComponent />
		</>
	);
};

export default memo(BuyCar);

import React, { memo } from 'react';
import CarPriceComponent from 'src/modules/car-price';

const CarPrice: React.FC = () => {
	return (
		<>
			<CarPriceComponent />
		</>
	);
};

export default memo(CarPrice);

import React, { memo } from 'react';
import UsedCarPriceComponent from 'src/modules/used-car-price';

const UsedCarPrice: React.FC = () => {
	return (
		<>
			<UsedCarPriceComponent />
		</>
	);
};

export default memo(UsedCarPrice);

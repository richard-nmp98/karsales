import React, { memo } from 'react';
import CarAcademyComponent from 'src/modules/car-academy';

const CarAcademy: React.FC = () => {
	return (
		<>
			<CarAcademyComponent />
		</>
	);
};

export default memo(CarAcademy);

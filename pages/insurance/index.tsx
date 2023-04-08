import React, { memo } from 'react';
import InsuranceComponent from 'src/modules/insurance';

const Insurance: React.FC = () => {
	return (
		<>
			<InsuranceComponent />
		</>
	);
};

export default memo(Insurance);

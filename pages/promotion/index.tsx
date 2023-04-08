import React, { memo } from 'react';
import PromotionComponent from 'src/modules/promotion';

const Promotion: React.FC = () => {
	return (
		<>
			<PromotionComponent />
		</>
	);
};

export default memo(Promotion);

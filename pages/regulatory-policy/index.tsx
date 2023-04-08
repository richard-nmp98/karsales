import React, { memo } from 'react';
import RegulatoryPolicyComponent from 'src/modules/regulatory-policy';

const RegulatoryPolicy: React.FC = () => {
	return (
		<>
			<RegulatoryPolicyComponent />
		</>
	);
};

export default memo(RegulatoryPolicy);

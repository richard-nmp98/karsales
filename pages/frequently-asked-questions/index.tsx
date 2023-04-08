import React, { memo } from 'react';
import FrequentlyAskedQuestionsComponent from 'src/modules/frequently-asked-questions';

const FrequentlyAskedQuestions: React.FC = () => {
	return (
		<>
			<FrequentlyAskedQuestionsComponent />
		</>
	);
};

export default memo(FrequentlyAskedQuestions);

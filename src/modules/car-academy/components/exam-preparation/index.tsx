import React, { memo, useState } from 'react';
import { Wrapper } from './styled';
import ExamPreparationTheory from '../exam-preparation-theory';
import ExamPreparationSimulation from '../exam-preparation-simulation';

enum TABENUM {
	THEORY = 'THEORY',
	SIMULATION = 'SIMULATION',
}

const TABS = [
	{
		type: TABENUM.THEORY,
		name: 'Ôn tập lý thuyết',
		component: <ExamPreparationTheory />,
	},
	{
		type: TABENUM.SIMULATION,
		name: 'Ôn tập mô phỏng',
		component: <ExamPreparationSimulation />,
	},
];

const ExamPreparation: React.FC = () => {
	const [tab, setTab] = useState(TABS[0]);

	return (
		<>
			<Wrapper className="mb-[78px]">
				<div className="tab flex gap-[10px] items-center md:mb-[55px] mb-[30px]">
					{TABS.map((item, index) => (
						<button
							onClick={() => setTab(item)}
							className={`${
								tab.type === item.type ? 'active font-bold text-white' : 'font--[400] text-black'
							} lg:text-[22px] sm:text-[16px] ssm:text-sm md:w-[264px] md:h-[56px] ssm:w-[220px] ssm:h-[43px] w-[150px] h-[33px] flex justify-center items-center border-0 rounded`}
							key={index}
						>
							{item.name}
						</button>
					))}
				</div>
				{tab.component}
			</Wrapper>
		</>
	);
};

export default memo(ExamPreparation);

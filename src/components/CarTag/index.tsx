import React from 'react';

type CarTagProps = {
	title: string;
	background?: string;
	textColor?: string;
};
const CarTag: React.FC<CarTagProps> = ({ title }: CarTagProps) => {
	return (
		<>
			<label className={'absolute top-[15px] uppercase left-[15px] bg-[#FFD726] px-3 py-1 rounded-[5px] z-[100]'}>
				{title}
			</label>
		</>
	);
};

export default CarTag;

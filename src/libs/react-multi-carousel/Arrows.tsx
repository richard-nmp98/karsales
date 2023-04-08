import { cloneElement } from 'react';
import type { StateCallBack } from './types';

interface LeftArrowProps {
	customLeftArrow?: React.ReactElement<any> | null;
	getState: () => StateCallBack;
	previous: () => void;
}

interface RightArrowProps {
	customRightArrow?: React.ReactElement<any> | null;
	getState: () => StateCallBack;
	next: () => void;
}

const LeftArrow = ({ customLeftArrow, getState, previous }: LeftArrowProps): React.ReactElement<any> => {
	if (customLeftArrow) {
		return cloneElement(customLeftArrow, {
			onClick: () => previous(),
			carouselState: getState(),
		});
	}
	return (
		<button
			aria-label="Go to previous slide"
			className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
			onClick={() => previous()}
			type="button"
		/>
	);
};
const RightArrow = ({ customRightArrow, next, getState }: RightArrowProps): React.ReactElement<any> => {
	if (customRightArrow) {
		return cloneElement(customRightArrow, {
			onClick: () => next(),
			carouselState: getState(),
		});
	}
	return (
		<button
			aria-label="Go to next slide"
			className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
			onClick={() => next()}
			type="button"
		/>
	);
};

export { LeftArrow, RightArrow };

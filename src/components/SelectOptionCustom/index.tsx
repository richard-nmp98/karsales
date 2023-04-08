import { Select } from 'antd';
import { memo } from 'react';

export interface ItemSelectProps {
	label?: string | null;
	value?: string | number | null;
}

export const ColorSelect = {
	GRAY: {
		text: 'text-gray-text',
		icon: '/images/icons/dropdown-gray.svg',
	},
	BLUE: {
		text: 'text-blue-text',
		icon: '/images/icons/dropdown.svg',
	},
};

export enum ColorSelectProps {
	GRAY = 'GRAY',
	BLUE = 'BLUE',
}

export interface PropsSelect {
	defaultValue?: any;
	value?: any;
	items?: ItemSelectProps[];
	onChange?: any;
	placeHolder?: string;
	color?: ColorSelectProps;
}

const SelectOptionCustom: React.FC<PropsSelect> = (props) => {
	return (
		<Select
			className={`w-full rounded antd-select-border-0 antd-select-box-shadow ant-select-h-40 font-normal text-base ${
				props?.color ? ColorSelect[props?.color].text : ColorSelect.BLUE.text
			}`}
			showSearch={false}
			filterOption={(input: any, option: any) =>
				option?.label?.toLowerCase()?.indexOf(input?.toLowerCase()) >= 0 ||
				option?.value?.toLowerCase()?.indexOf(input?.toLowerCase()) >= 0
			}
			// value={props?.value ?? ''}
			placeholder={props?.placeHolder ?? ''}
			value={props?.value}
			defaultValue={props?.defaultValue}
			suffixIcon={<img src={props?.color ? ColorSelect[props?.color].icon : ColorSelect.BLUE.icon} alt="" />}
			onChange={props?.onChange}
			options={props?.items?.filter((item) => item.label !== null) ?? []}
		/>
	);
};

export default memo(SelectOptionCustom);

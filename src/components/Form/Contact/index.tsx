import React from 'react';

import { Form, Input, Button } from 'antd';
import type { FormItemProps } from 'antd';

const MyFormItemContext = React.createContext<(string | number)[]>([]);
const ContactForm: React.FC = () => {
	function toArr(str: string | number | (string | number)[]): (string | number)[] {
		return Array.isArray(str) ? str : [str];
	}

	const MyFormItem = ({ name, ...props }: FormItemProps) => {
		const prefixPath = React.useContext(MyFormItemContext);
		const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

		return <Form.Item name={concatName} {...props} />;
	};
	const onFinish = () => {
		// console.log(value);
	};
	return (
		<>
			<Form name="form_item_path" layout="vertical" onFinish={onFinish}>
				<MyFormItem name="fullName" label="Họ và tên" rules={[{ required: true, message: 'Họ và tên bắt buộc' }]}>
					<Input rootClassName={`rounded-[5px] border-[#ccc]`} className={`bg-[#FAFAFA]`} />
				</MyFormItem>

				<MyFormItem
					className={'mt-2'}
					name="phoneNumber"
					label="Số điện thoại"
					rules={[{ required: true, message: 'Số điện thoại bắt buộc' }]}
				>
					<Input rootClassName={`rounded-[5px] border-[#ccc]`} className={`bg-[#FAFAFA]`} />
				</MyFormItem>

				<MyFormItem name="email" label="Email" className={'mt-2'}>
					<Input rootClassName={`rounded-[5px] border-[#ccc]`} className={`bg-[#FAFAFA]`} />
				</MyFormItem>

				<MyFormItem
					className={'mt-2'}
					name="content"
					label="Nội dung"
					rules={[{ required: true, message: 'Nội dung bắt buộc' }]}
				>
					<Input.TextArea className={`bg-[#FAFAFA]`} />
				</MyFormItem>

				<Button
					type="primary"
					className={`mt-4 bg-main-500 hover:!bg-main-500 hover:opacity-80 px-7 h-auto py-2 text-[16px] font-semibold`}
					htmlType="submit"
				>
					GỬI
					<span className={`ml-3`}>
						<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M4.53809 9.21094V11.5489C4.53822 11.6284 4.56343 11.7059 4.61011 11.7702C4.6568 11.8346 4.72259 11.8826 4.79813 11.9074C4.87367 11.9322 4.95511 11.9326 5.03086 11.9084C5.10662 11.8843 5.17283 11.8369 5.22009 11.7729L6.58809 9.91194L4.53809 9.21094Z"
								fill="white"
							/>
							<path
								d="M12.0661 0.403915C12.0093 0.363529 11.9425 0.339634 11.8729 0.334869C11.8034 0.330104 11.7339 0.344655 11.6721 0.376915L0.328115 6.29891C0.262468 6.33305 0.208284 6.38571 0.17228 6.45035C0.136275 6.51499 0.120035 6.58878 0.125572 6.66256C0.131108 6.73635 0.158178 6.80689 0.203426 6.86543C0.248673 6.92398 0.310108 6.96796 0.380115 6.99191L3.53611 8.06991L10.2501 2.32891L5.05011 8.58891L10.3341 10.3949C10.3734 10.4081 10.4146 10.4148 10.4561 10.4149C10.5467 10.415 10.6343 10.3825 10.7029 10.3234C10.7716 10.2643 10.8167 10.1825 10.8301 10.0929L12.2211 0.767915C12.2313 0.698852 12.2222 0.628315 12.1949 0.564085C12.1675 0.499855 12.123 0.444427 12.0661 0.403915Z"
								fill="white"
							/>
						</svg>
					</span>
				</Button>
			</Form>
		</>
	);
};

export default ContactForm;

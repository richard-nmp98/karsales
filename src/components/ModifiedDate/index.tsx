import React from 'react';
import moment from 'moment';
import { DATE_FORMAT } from '@/helpers/constant';

type ModifiedDateProps = {
	dateTime: string;
	format?: string;
};
const ModifiedDate = ({ dateTime, format = DATE_FORMAT }: ModifiedDateProps) => {
	const time = moment(dateTime).format(format);
	return (
		<>
			<span className="block text-date-500 text-sm">{time}</span>
		</>
	);
};
export default ModifiedDate;

import Head from 'next/head';
import { memo } from 'react';

type Props = {
	title?: string;
};

const HeadDocs: React.FC<Props> = ({ title = '' }) => {
	return (
		<Head>
			<title>Karsales {title ? `| ${title}` : ''}</title>
		</Head>
	);
};

export default memo(HeadDocs);

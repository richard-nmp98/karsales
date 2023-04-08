import { useState } from 'react';
import { client } from 'src/client/client';

export const useQuery = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<any>(null);

	const query = async (document: any, variable?: any) => {
		setLoading(true);
		return client
			.query(document, variable ?? {})
			.toPromise()
			.then(({ data }) => {
				setData(data);
				setLoading(false);
				return data;
			})
			.catch((error) => {
				setLoading(false);
				throw error;
			});
	};

	return {
		loading,
		data,
		query,
	};
};

import { useEffect, useState } from 'react';

export const useDelay = (delay = 100) => {
	const [status, setStatus] = useState(false);

	useEffect(() => {
		const handler = setTimeout(() => {
			setStatus(true);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [delay]);

	return status;
};

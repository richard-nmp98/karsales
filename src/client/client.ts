import { ClientOptions, createClient } from 'urql';
import { BatchHttpLink } from '@apollo/client/link/batch-http';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = createClient({
	url: (typeof window === 'undefined' ? process.env.SERVER_API_URL : process.env.NEXT_PUBLIC_API_URL) as string,
	maskTypename: true,
	requestPolicy: 'network-only',
	fetchOptions: {
		headers: {
			language: 'vi',
		},
	},
});
const httpLink = new BatchHttpLink({
	uri: ((process.env.SERVER_API_URL as string) + process.env.NEXT_PUBLIC_API_URL) as string,
	credentials: process.env.NODE_ENV === 'development' ? 'include' : 'same-origin',
	includeExtensions: true,
	batchMax: 5,
});
export const apolloClient = new ApolloClient({
	ssrMode: typeof window === 'undefined', // set to true for SSR
	link: httpLink,
	cache: new InMemoryCache(),
});

export const initUrqlClient = (opts?: Omit<ClientOptions, 'url'>) => {
	return createClient({
		url: (typeof window === 'undefined' ? process.env.SERVER_API_URL : process.env.NEXT_PUBLIC_API_URL) as string,
		maskTypename: true,
		requestPolicy: 'cache-first',
		fetchOptions: {
			headers: {
				language: 'vi',
			},
		},
		...opts,
	});
};

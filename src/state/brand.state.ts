import { CarBrandEntity } from '@/graphql/type.interface';
import { createStore, createHook, createContainer, createSubscriber } from 'react-sweet-state';

type State = {
	data: CarBrandEntity[];
};

const initialState: State = {
	data: [],
};

const Brand = createStore({
	initialState,
	actions: {
		setData:
			(data: CarBrandEntity[]) =>
			({ setState }) => {
				setState({
					data: [...data],
				});
			},
	},
	name: 'Brand',
});

export const useHookBrand = createHook(Brand);
export const Container = createContainer(Brand, {
	onInit:
		() =>
		({ setState }, props: any) => {
			setState({ ...props });
		},
});

export const Subscriber = createSubscriber(Brand);

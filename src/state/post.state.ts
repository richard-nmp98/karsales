import { PostEntity } from '@/graphql/type.interface';
import { createStore, createHook, createContainer, createSubscriber } from 'react-sweet-state';

type State = {
	data: PostEntity | null;
};

const initialState: State = {
	data: null,
};

const Post = createStore({
	initialState,
	actions: {
		setData:
			(data: PostEntity | null) =>
			({ setState }) => {
				setState({
					data: data,
				});
			},
	},
	name: 'Post',
});

export const useHookPost = createHook(Post);
export const Container = createContainer(Post, {
	onInit:
		() =>
		({ setState }, props: any) => {
			setState({ ...props });
		},
});

export const Subscriber = createSubscriber(Post);

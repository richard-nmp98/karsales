import React, { memo, useState } from 'react';
import { Wrapper } from './styled';
import { useListBannerPositionQuery } from '@/graphql/queries/listBannerPosition.generated';
import { BannerPositionEnum } from '@/graphql/type.interface';
import { useListBannerByPositionQuery } from '@/graphql/queries/listBannerByPosition.generated';
import MainSlide, { SlideItem } from '@/components/Swiper/Main';
import { FetchPolicyEnum } from '@/helpers/constant';

type Props = {
	position?: BannerPositionEnum;
};

const CarouselHome: React.FC<Props> = (props) => {
	const [slide, setSlide] = useState([] as SlideItem[]);

	const { data: position } = useListBannerPositionQuery({
		fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
	});

	const { loading } = useListBannerByPositionQuery({
		fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
		variables: {
			input: {
				id:
					position?.listBannerPosition?.find(
						(item) => item?.type === (props?.position ?? BannerPositionEnum.WEBSITE_TOP),
					)?.id ?? '',
			},
		},
		onCompleted(data) {
			if (data) {
				const __slide: SlideItem[] =
					data?.listBannerByPosition?.map((item) => {
						return {
							title: item?.name ?? '',
							thumbnail: item?.medias ? item?.medias[0].filePathOriginal ?? '' : '',
							link: item?.linkBanner ?? '',
						};
					}) ?? [];

				setSlide([...(__slide ?? [])]);
			}
		},
	});

	return (
		<Wrapper className={loading ? 'loading' : ''}>
			{loading ? <></> : <MainSlide id={'main-slide'} items={slide} />}
		</Wrapper>
	);
};

export default memo(CarouselHome);

import React, { memo } from 'react';
import { UPLOAD_ALLOW_VIDEO_TYPES } from '@/helpers/constant';
import _ from 'lodash';
import FeatureVideo from '@/components/News/FeatureVideo';
import FeatureImage from '@/components/News/FeatureImage';
import { ReviewsEntity } from '@/graphql/type.interface';
import { StringToSlug } from '@/helpers/string-to-slug';

type FeatureImageVideoProps = {
	archiveLink?: string;
	className?: string;
	postReview: ReviewsEntity;
};

const FeatureImageVideo: React.FC<FeatureImageVideoProps> = ({
	postReview,
	archiveLink = '',
	className = '',
}: FeatureImageVideoProps) => {
	const medias = postReview?.medias || [];
	const findImage = _.find(medias, { mimeType: 'image' });
	const findVideo = _.find(medias, function (it) {
		return _.includes(UPLOAD_ALLOW_VIDEO_TYPES, it.mimeType);
	});
	const video = findVideo?.filePathOriginal || '';
	const image = findImage?.filePathOriginal || '';
	const title = postReview.nameVi || '';
	const slug = (postReview.slug || StringToSlug(title)) as string;
	return (
		<div className={'overflow-hidden rounded-[5px] overflow-hidden'}>
			{video == '' ? (
				<FeatureImage
					image={image}
					archiveLink={archiveLink}
					className={`aspect-[3/2] ${className}`}
					title={title}
					slug={slug}
				/>
			) : (
				<FeatureVideo video={video} image={image} className={className} title={title} />
			)}
		</div>
	);
};

export default memo(FeatureImageVideo);

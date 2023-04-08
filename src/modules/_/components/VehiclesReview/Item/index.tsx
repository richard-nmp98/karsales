import React from 'react';
import Link from 'next/link';
import moment from 'moment/moment';
import { FireFilled, MessageOutlined } from '@ant-design/icons';
import { NewsProps } from '@/types';
import { StringToSlug } from '@/helpers/string-to-slug';
import FeatureImageVideo from '@/components/News/FeatureImageVideo';
import { trimWord } from '@/helpers/functions';

const ReviewItem: React.FC<NewsProps> = (props: NewsProps) => {
	const tag = props.tag || '';
	const {
		showComment,
		showView,
		showDescription,
		postReview,
		imagePosition,
		titleClassName,
		archiveLink = '',
		positionDateCommentView = 'after-description',
		trimWordCount = 50,
	} = props;
	const imgP = imagePosition || 'left';
	const titleClass = titleClassName || 'text-lg';
	const showDesc = showDescription === undefined ? true : showDescription;
	const isLeftRight: boolean = ['left', 'right'].includes(imgP);
	const isLeftTop: boolean = ['left', 'top'].includes(imgP);
	const dateCommentView = (
		<div className="space-x-4 text-date-500 mt-2 text-sm">
			<span>{moment(postReview.updatedAt).calendar()}</span>
			{showComment && (
				<span>
					<MessageOutlined style={{ fontSize: '12px' }} className="align-[0.3em] mr-1" />
					12
				</span>
			)}
			{showView && (
				<span>
					<FireFilled style={{ fontSize: '14px' }} className="align-[0.3em] mr-1" />
					3127
				</span>
			)}
		</div>
	);

	const title = postReview?.nameVi || '';
	const slug = postReview?.slug || StringToSlug(title);
	return (
		postReview && (
			<div className={`grid grid-cols-12 gap-x-0 gap-y-2 ${isLeftRight ? 'md:gap-x-4 md:gap-y-0' : ''}`}>
				<div
					className={`col-span-12 ${isLeftRight ? 'md:col-span-8' : ''} order-2 ${
						isLeftTop ? 'md:order-2' : 'md:order-1'
					}`}
				>
					{Boolean(tag) && (
						<label className={'uppercase mb-3 inline-block bg-[#FFD726] px-3 py-1 rounded-[5px] mt-2 md:mt-0'}>
							{tag}
						</label>
					)}
					<Link className={`block mb-1 font-bold ${titleClass}`} href={`${archiveLink}/${slug}`} title={title}>
						{title}
					</Link>
					{positionDateCommentView === 'after-title' && dateCommentView}
					{showDesc && <p>{trimWord(postReview.descriptionVi || '', trimWordCount)}</p>}
					{positionDateCommentView === 'after-description' && dateCommentView}
				</div>
				<div
					className={`col-span-12 ${isLeftRight ? 'md:col-span-4' : ''} order-1 ${
						isLeftTop ? 'md:order-1' : 'md:order-2'
					}`}
				>
					<FeatureImageVideo archiveLink={'/danh-gia-xe'} postReview={postReview} />
				</div>
			</div>
		)
	);
};

export default ReviewItem;

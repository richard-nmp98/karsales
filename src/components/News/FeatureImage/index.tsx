import Link from 'next/link';
import React, { memo } from 'react';

type FeatureImageProps = {
	title: string;
	slug?: string;
	image?: string;
	archiveLink?: string;
	className?: string;
};

const FeatureImage: React.FC<FeatureImageProps> = ({
	title,
	slug = '',
	image = '',
	archiveLink = '',
	className = '',
}: FeatureImageProps) => {
	return (
		<Link href={`${archiveLink}/${slug}`} title={title} legacyBehavior={true}>
			<a>
				<img
					className={`transition-all duration-500 hover:scale-[1.1] w-full object-cover ${className}`}
					src={image}
					alt={title}
				/>
			</a>
		</Link>
	);
};

export default memo(FeatureImage);

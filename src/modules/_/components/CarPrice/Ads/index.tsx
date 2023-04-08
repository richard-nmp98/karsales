import Link from 'next/link';
import React, { memo } from 'react';
import { Wrapper } from './styled';

const AdsComponent: React.FC = () => {
	return (
		<>
			<Wrapper className="w-full pt-[10px]">
				<div
					style={{
						backgroundImage: `url(https://nftstorage.link/ipfs/bafkreidg5gedb5hp4ult5lj6bgrq5uismywlf2rhocrpsflsbniuefrynu)`,
						backgroundSize: 'cover',
						backgroundPosition: 'left',
						backgroundRepeat: 'no-repeat',
					}}
					className="w-full h-[90px] flex items-center justify-center"
				>
					<Link href={`/read-more`} className="font-bold text-sm text-[#fff] btn-purchase">
						PURCHASE NOW
					</Link>
				</div>
			</Wrapper>
		</>
	);
};

export default memo(AdsComponent);

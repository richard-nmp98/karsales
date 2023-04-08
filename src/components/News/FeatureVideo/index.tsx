import React, { memo, useEffect, useState } from 'react';
import { Modal } from 'antd';
import ReactPlayer from 'react-player';

type FeatureVideoProps = {
	title: string;
	video: string;
	image?: string;
	className?: string;
};
const FeatureVideo: React.FC<FeatureVideoProps> = (props) => {
	const { title, video, image = '', className = '' } = props;

	return (
		<>
			<ModalViewVideo video={video}>
				<div className={'relative'}>
					<div>
						{image === '' ? (
							<img
								className={`transition-all duration-500 hover:scale-[1.1] w-full object-cover ${className}`}
								src={image}
								alt={title}
							/>
						) : (
							<video className={`w-full h-full`}>
								<source src={video} type="video/mp4" />
							</video>
						)}
					</div>
					<span className="absolute cursor-pointer inset-0 flex items-center justify-center z-[90] text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-16 h-16"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							<path
								strokeLinecap="round"
								fill={'#FFF'}
								strokeLinejoin="round"
								d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
							/>
						</svg>
					</span>
				</div>
			</ModalViewVideo>
		</>
	);
};

type ModalViewVideoProps = {
	video: string;
	children: React.ReactNode;
};
const ModalViewVideo: React.FC<ModalViewVideoProps> = ({ video, children }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [playing, setPlaying] = useState(false);
	useEffect(() => {
		setPlaying(modalOpen);
	}, [modalOpen]);
	return (
		<>
			<div onClick={() => setModalOpen(true)}>{children}</div>
			<Modal
				rootClassName={'kar-modal-video'}
				className={'!w-[50vw] h-[50vh]'}
				footer={false}
				centered
				destroyOnClose={true}
				open={modalOpen}
				onCancel={() => setModalOpen(false)}
				afterClose={() => setPlaying(false)}
			>
				<div>
					<ReactPlayer url={video} width={'100%'} height={'100%'} controls playing={playing} />
				</div>
			</Modal>
		</>
	);
};

export default memo(FeatureVideo);

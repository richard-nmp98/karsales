import React, { memo } from 'react';
import { Download, IconDownload } from './styled';
import DownloadAppModal from '@/components/Popup/DownloadApp';
import { LINK_DOWN_APP } from '@/helpers/constant';

const DownloadApp = () => {
	return (
		<>
			{/* <Download className="qr-download">
				<IconDownload src="/images/home-page/qr-download.png" alt="karsale" />
			</Download> */}
			<DownloadAppModal storeText={'AppStore'} link={LINK_DOWN_APP.appStore}>
				<Download className="download-app cursor-pointer">
					<IconDownload src="/images/home-page/download-app-store.svg" alt="karsale" />
				</Download>
			</DownloadAppModal>

			<DownloadAppModal storeText={'CHPlay'} link={LINK_DOWN_APP.googlePlay}>
				<Download className="download-app cursor-pointer">
					<IconDownload src="/images/home-page/download-app-google-play.svg" alt="karsale" />
				</Download>
			</DownloadAppModal>
		</>
	);
};

export default memo(DownloadApp);

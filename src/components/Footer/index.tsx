import React, { memo } from 'react';
import Link from 'next/link';
import { Wrapper, Content, Line, KarLogo } from './styled';
import DownloadApp from '../DownloadApp';

const Footer: React.FC = () => {
	return (
		<>
			<Wrapper>
				<Content className="container">
					<KarLogo>Karsales</KarLogo>
					<div className="grid grid-cols-12 text-white gap-y-6 gap-x-3">
						<div className="lg:col-span-5 col-span-12">
							<div className="text-footer-500 mb-4">Công Ty Cổ Phần Karsales Việt Nam</div>
							<div className="text-footer-500">
								Giấy Chứng Nhận ĐKDN Số 0106774081 Cấp Bởi Phòng ĐKKD Tp.Hcm Ngày 11/02/2020
							</div>
							<img className="w-30 mt-2" src="/images/footer/ministry-industry-trade.svg" alt="karsales" />
						</div>
						<div className="col-span-1"></div>
						<div className="lg:col-span-6 col-span-12">
							<div className="grid grid-cols-12 gap-y-6 gap-x-[5px]">
								<div className="md:col-span-4 col-span-12">
									<h5 className="mb-4 font-semibold">Hỗ Trợ</h5>
									<ul className="text-footer-1">
										<li className="mb-1">
											<Link href="/chinh-sach-bao-mat">Chính Sách Bảo Mật</Link>
										</li>
										<li className="mb-1">
											<Link href="/cau-hoi-thuong-gap">Câu Hỏi Thường Gặp</Link>
										</li>
										<li className="mb-1">
											<Link href="/lien-he">Liên Hệ</Link>
										</li>
									</ul>
								</div>
								<div className="md:col-span-4 col-span-12">
									<h5 className="mb-4 font-semibold">Tin Tức Xe</h5>
									<ul className="text-footer-1">
										<li className="mb-1">
											<Link href="/khuyen-mai">Khuyến Mại Từ Các Hãng</Link>
										</li>
										<li className="mb-1">
											<Link href="/hoc-vien-oto">Học Viện Ô Tô</Link>
										</li>
									</ul>
								</div>
								<div className="md:col-span-4 col-span-12">
									<h5 className="mb-4 font-semibold">Về Chúng Tôi</h5>
									<ul className="text-footer-1">
										<li className="mb-1">
											<Link href="/ve-karsales">Giới Thiệu</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<Line />
					<div className="grid grid-cols-12 gap-y-4 md:gap-y-0">
						<div className="md:col-span-6 col-span-12 md:order-1 order-2 font-semibold text-lg text-white">
							Copyright © 2020 - 2022 KARSALES
						</div>
						<div className="md:col-span-6 col-span-12 text-right md:order-2 order-1">
							<div className="flex md:justify-end space-x-4">
								<DownloadApp />
							</div>
						</div>
					</div>
				</Content>
			</Wrapper>
		</>
	);
};

export default memo(Footer);

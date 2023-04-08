import React, { useState } from 'react';
import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb';
import DownloadApp from '@/modules/_/components/DownloadApp';
import CarouselBanner from '@/components/Carousel';
import { NextSeo } from 'next-seo';

const IntroductionPage: React.FC = () => {
	const [current] = useState<BreadcrumbItem>({ title: 'Về KARSALES' });

	return (
		<>
			<NextSeo
				title={'Về KARSALES'}
				description={
					'Karsales phiên bản điện thoại thông minh với nhiều tính năng hỗ trợ người bán xe một cách chuyên nghiệp, ' +
					'đăng tin nhanh chóng và quản lý tin đăng dễ dàng Karsales là kênh thông tin về mua bán xe ô tô trực tuyến ' +
					'(online) tại Việt Nam.'
				}
			></NextSeo>
			<CarouselBanner />
			<Breadcrumb current={current} />
			<div className="container pt-6 pb-4 lg:pb-[190px]">
				<h1 className={`text-center text-main-500 text-4xl font-bold my-5`}>KARSALES</h1>
				<div className={'md:max-w-[1200px] mx-auto'}>
					<p className={`mb-4`}>
						Karsales phiên bản điện thoại thông minh với nhiều tính năng hỗ trợ người bán xe một cách chuyên nghiệp,
						đăng tin nhanh chóng và quản lý tin đăng dễ dàng Karsales là kênh thông tin về mua bán xe ô tô trực tuyến
						(online) tại Việt Nam.
					</p>
					<p className={`mb-4`}>
						Với công cụ đăng tin bán xe (xế) với giao diện tin giản dễ sử dụng, giúp cho việc đăng tin rao bán xe thực
						hiện thuận tiện trong vài bước thao tác đơn giản.
					</p>
					<p className={`mb-4`}>
						Karsales với mục tiêu tạo ra nền tảng thông tin về mua bán xe lớn nhất và uy tín tại Việt Nam, đặt người
						dùng làm trung tâm, làm sao cung cấp nhiều thông tin chất lượng và những gợi ý có giá trị cho người mua,
						cũng như dịch vụ tốt nhất cho người bán xe.
					</p>
					<p className={`mb-4`}>
						Ngoài ra, Karsales cũng là nơi cung cấp những thông tin khuyến mại của hãng và thông tin hữu ích về xe hơi
						như thông tin thị trường, kinh nghiệm lái xe, giúp bạn có an tâm trên cung đường của mình.{' '}
					</p>
					<p>
						<strong>Các tính năng nổi bật của Karsales:</strong>
					</p>
					<p>- Tìm kiếm xe dễ dàng với bộ lọc/tìm kiếm: Đơn giản, giúp người mua tiếp cận được những chiếc xe ưng ý</p>
					<p>
						- Đăng tin dễ dàng và nhanh chóng: Phương pháp tùy chọn trực quan, giảm thời gian thao tác chỉ còn trong
						vòng chưa đến 2 phút.
					</p>
					<p>- Quản lý tin đăng bán xe thuận lợi: Tùy chỉnh, gia hạn, thanh toán tin rao bán xe nhanh chóng</p>
					<p>
						- Quản lý thông tin cá nhân và ví thuận tiện: Dễ dàng cập nhật thông tin và thêm tiền vào ví với phương thức
						thanh toán đơn giản, nhanh chóng và an toàn.
					</p>
					<p className={`mb-4`}>
						- Khuyến mãi ngập tràn: Với khuyến mãi &quot;Một người bạn - nhận 1 KAR&quot;, bạn không còn lo nghĩ về tin
						rao của mình bị thiếu phí.
					</p>

					<p className={`mb-4`}>Chúc các bạn có những trải nghiệm thật tốt với Karsales.</p>
					<p className={`mb-4`}>Không tải app Karsales này thì tải app nào nữa!</p>
				</div>
			</div>
			<DownloadApp />
		</>
	);
};

export default IntroductionPage;

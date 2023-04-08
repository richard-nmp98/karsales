import Link from 'next/link';

export interface BreadcrumbItem {
	title?: string;
	url?: string;
}

interface BreadcrumbProps {
	lstItem?: BreadcrumbItem[];
	current: BreadcrumbItem;
}

function ArrowRight() {
	return (
		<svg width="4" height="3" viewBox="0 0 4 3" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M1.10419 1.49408L0.0841675 0.486089C0.0578024 0.459881 0.0368606 0.428738 0.022583 0.394414C0.00830545 0.36009 0.000976562 0.323282 0.000976562 0.286107C0.000976562 0.248932 0.00830545 0.212124 0.022583 0.1778C0.0368606 0.143477 0.0578024 0.112303 0.0841675 0.086095C0.124889 0.0458049 0.176575 0.0184193 0.232788 0.00739018C0.289001 -0.00363896 0.34722 0.00219774 0.400146 0.0241138C0.435194 0.0385085 0.467111 0.0595451 0.494141 0.086095L1.71619 1.2931C1.74255 1.3193 1.76343 1.35048 1.77771 1.3848C1.79199 1.41912 1.79938 1.45593 1.79938 1.49311C1.79938 1.53028 1.79199 1.56709 1.77771 1.60141C1.76343 1.63574 1.74255 1.66688 1.71619 1.69309L0.494141 2.91511C0.467103 2.9414 0.435172 2.96213 0.400146 2.97611C0.329164 3.00423 0.250121 3.00423 0.179138 2.97611C0.135529 2.95882 0.0969404 2.93091 0.0668335 2.89493C0.0367266 2.85896 0.0160478 2.81603 0.00671387 2.77006C-0.00262002 2.72408 -0.000326433 2.6765 0.0133667 2.63163C0.0270598 2.58676 0.0517307 2.54603 0.085144 2.5131L1.10419 1.49408Z"
				fill="black"
			/>
			<path
				d="M2.90424 1.49408L1.88422 0.486089C1.85785 0.459881 1.83691 0.428738 1.82263 0.394414C1.80835 0.36009 1.80103 0.323282 1.80103 0.286107C1.80103 0.248932 1.80835 0.212124 1.82263 0.1778C1.83691 0.143477 1.85785 0.112303 1.88422 0.086095C1.92494 0.0458049 1.97662 0.0184193 2.03284 0.00739018C2.08905 -0.00363896 2.14727 0.00219774 2.2002 0.0241138C2.23524 0.0385085 2.26716 0.0595451 2.29419 0.086095L3.51624 1.2931C3.5426 1.3193 3.56348 1.35048 3.57776 1.3848C3.59204 1.41912 3.59943 1.45593 3.59943 1.49311C3.59943 1.53028 3.59204 1.56709 3.57776 1.60141C3.56348 1.63574 3.5426 1.66688 3.51624 1.69309L2.29419 2.91511C2.26715 2.9414 2.23522 2.96213 2.2002 2.97611C2.12921 3.00423 2.05017 3.00423 1.97919 2.97611C1.93558 2.95882 1.89699 2.93091 1.86688 2.89493C1.83678 2.85896 1.8161 2.81603 1.80676 2.77006C1.79743 2.72408 1.79972 2.6765 1.81342 2.63163C1.82711 2.58676 1.85178 2.54603 1.88519 2.5131L2.90424 1.49408Z"
				fill="black"
			/>
		</svg>
	);
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ lstItem = [], current }) => {
	const items: BreadcrumbItem[] = [...lstItem];

	return (
		<nav aria-label="breadcrumb" className="bg-[#EDEDED] w-full md:block hidden">
			<ol className="container breadcrumb flex md:flex-nowrap flex-wrap items-center gap-1.5 py-1.5">
				<div className="flex">
					<div className="h-[20px] w-[2px] bg-pink-main mr-[20px]" />
					<li className="breadcrumb-item flex items-center gap-[10px]">
						<Link href={'/'}>Trang chủ</Link>
						<ArrowRight />
					</li>
				</div>
				{items.map((item, index) => (
					<li key={index} className="breadcrumb-item flex items-center gap-[10px]">
						{item?.url ? <Link href={item?.url ?? '/'}>{item.title}</Link> : <p>{item?.title}</p>}
						{item?.title && (index < items.length - 1 || (index == items?.length - 1 && current.title)) ? (
							<ArrowRight />
						) : (
							<></>
						)}
					</li>
				))}
				<li className="breadcrumb-item active" aria-current="page">
					{current.title}
				</li>
			</ol>
		</nav>
	);
};

export default Breadcrumb;

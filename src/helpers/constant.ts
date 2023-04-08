export const DATE_FORMAT = 'HH:mm | DD/MM/YYYY';
export const DATE_FORMAT_DMY = 'DD/MM/YYYY';

export const UPLOAD_ALLOW_VIDEO_TYPES = ['video/mp4'];

export const LINK_DOWN_APP = {
	googlePlay: 'https://play.google.com/store/apps/details?id=com.cores.kar&pli=1',
	appStore: 'https://apps.apple.com/za/app/karsales-mua-b%C3%A1n-xe-%C3%B4t%C3%B4-online/id1592821563',
};

import {
	CarConditionEnum,
	CarTransmissionEnum,
	PaymentFormEnum,
	PostSortType,
	QuestionGroupTypeEnum,
	QuestionSimulationGroupTypeEnum,
} from '@/graphql/type.interface';

export const TRANSMISSIONTYPE = [
	{
		value: CarTransmissionEnum.AUTOMATIC,
		text: 'Tự động',
	},
	{
		value: CarTransmissionEnum.MANUAL,
		text: 'Số sàn',
	},
	{
		value: CarTransmissionEnum.AMT,
		text: 'Cả 2',
	},
];

export const CONDITIONTYPE = [
	{
		value: CarConditionEnum.NEW,
		text: 'Xe mới',
	},
	{
		value: CarConditionEnum.USED,
		text: 'Xe cũ',
	},
	{
		value: CarConditionEnum.NEAR_NEW_AND_DEMO,
		text: 'Như mới/lướt',
	},
	{
		value: CarConditionEnum.OLD,
		text: 'Xe cổ',
	},
];

export const CONDITIONLINK = [
	// {
	// 	value: null,
	// 	link: 'tat-ca',
	// },
	{
		value: CarConditionEnum.NEW,
		link: 'xe-moi',
	},
	{
		value: CarConditionEnum.USED,
		link: 'xe-cu',
	},
	{
		value: CarConditionEnum.NEAR_NEW_AND_DEMO,
		link: 'xe-nhu-moi',
	},
	{
		value: CarConditionEnum.OLD,
		link: 'xe-co',
	},
];

export const POSTSORTTYPEENUM = [
	{
		value: PostSortType.FEATURED,
		text: 'Tính năng',
		link: 'tinh-nang',
	},
	{
		value: PostSortType.PRICE_HIGH_TO_LOW,
		text: 'Giá (cao đến thấp)',
		link: 'gia-cao-den-thap',
	},
	{
		value: PostSortType.PRICE_LOW_TO_HIGH,
		text: 'Giá (thấp đến cao)',
		link: 'gia-thap-den-cao',
	},
	{
		value: PostSortType.KM_HIGH_TO_LOW,
		text: 'Km (cao đến thấp)',
		link: 'km-cao-den-thap',
	},
	{
		value: PostSortType.KM_LOW_TO_HIGH,
		text: 'Km (thấp đến cao)',
		link: 'km-thap-den-cao',
	},
	{
		value: PostSortType.YEAR_HIGH_TO_LOW,
		text: 'Năm sản xuất (mới đến cũ)',
		link: 'nam-san-xuat-moi-den-cu',
	},
	{
		value: PostSortType.YEAR_LOW_TO_HIGH,
		text: 'Năm sản xuất (cũ đến mới)',
		link: 'nam-san-xuat-cu-den-moi',
	},
	{
		value: PostSortType.TOTAL_VIEW,
		text: 'Xem nhiều',
		link: 'xem-nhieu',
	},
];

export const QUESTION_THEORY_TYPE = [
	{
		value: QuestionGroupTypeEnum.SA_HINH_VA_MEO,
		text: 'Sa hình và mẹo',
		link: 'sa-hinh-va-meo',
	},
	{
		value: QuestionGroupTypeEnum.DIEM_LIET,
		text: 'Điểm liệt',
		link: 'diem-liet',
	},
	{
		value: QuestionGroupTypeEnum.KHAI_NIEM_QUY_TAC,
		text: 'Khái niệm quy tắc',
		link: 'khai-niem-quy-tac',
	},
	{
		value: QuestionGroupTypeEnum.NGHIEP_VU_VAN_TAI,
		text: 'Nghiệp vụ vận tải',
		link: 'nghiep-vu-van-tai',
	},
	{
		value: QuestionGroupTypeEnum.CAU_TAO_VA_SUA_CHUA_XE,
		text: 'Cấu tạo và sửa chữa xe',
		link: 'cau-tao-va-sua-chua-xe',
	},
	{
		value: QuestionGroupTypeEnum.VAN_HOA_DAO_DUC_LAI_XE,
		text: 'Văn hóa đạo đức lái xe',
		link: 'van-hoa-dao-duc-lai-xe',
	},
	{
		value: QuestionGroupTypeEnum.KY_THUAT_LAI_XE,
		text: 'Kỹ thuật lái xe',
		link: 'ky-thuat-lai-xe',
	},
	{
		value: QuestionGroupTypeEnum.SA_HINH,
		text: 'Sa hình',
		link: 'sa-hinh',
	},
	{
		value: QuestionGroupTypeEnum.BIEN_BAO,
		text: 'Biển báo',
		link: 'bien-bao',
	},
];

export const QUESTION_SIMULATION_TYPE = [
	{
		value: QuestionSimulationGroupTypeEnum.CAU_HAY_SAI,
		text: 'Câu hay sai',
		link: 'cau-hay-sai',
	},
	{
		value: QuestionSimulationGroupTypeEnum.CAU_SAI,
		text: 'Câu sai',
		link: 'cau-sai',
	},
	{
		value: QuestionSimulationGroupTypeEnum.CHUONG_I_GIAO_THONG_DO_THI,
		text: 'Chương 1: Giao thông đô thị',
		link: 'chuong-1-giao-thong-do-thi',
	},
	{
		value: QuestionSimulationGroupTypeEnum.CHUONG_II_GIAO_THONG_O_KHU_VUC_NGOAI_THANH,
		text: 'Chương 2: Giao thông ở khu vực ngoại thành',
		link: 'chuong-2-giao-thong-o-khu-vuc-ngoai-thanh',
	},
	{
		value: QuestionSimulationGroupTypeEnum.CHUONG_III_GIAO_THONG_TREN_CAO_TOC,
		text: 'Chương 3: Giao thông trên cao tốc',
		link: 'chuong-3-giao-thong-tren-cao-toc',
	},
	{
		value: QuestionSimulationGroupTypeEnum.CHUONG_IV_GIAO_THONG_TREN_DUONG_NUI,
		text: 'Chương 4: Giao thông trên đường núi',
		link: 'chuong-4-giao-thong-tren-duong-nui',
	},
	{
		value: QuestionSimulationGroupTypeEnum.CHUONG_V_GIAO_THONG_TREN_DUONG_QUOC_LO,
		text: 'Chương 5: Giao thông trên đường quốc lộ',
		link: 'chuong-5-giao-thong-tren-duong-quoc-lo',
	},
	{
		value: QuestionSimulationGroupTypeEnum.CHUONG_VI_TAI_NAN_GIAO_THONG_THUC_TE,
		text: 'Chương 6: Tai nạn giao thông thực tế',
		link: 'chuong-6-tai-nan-giao-thong-thuc-te',
	},
];

export const FORM_PAYMENT = [
	{
		value: PaymentFormEnum.DEBT_BALANCE_DECREASES,
		text: 'Theo dự nợ giảm dần',
		link: 'theo-du-no-giam-dan',
	},
	{
		value: PaymentFormEnum.DEBT_PAY_EVENLY,
		text: 'Trả đều',
		link: 'tra-deu',
	},
];

export const REVIEWCATEGORYSLUG = {
	news: {
		value: 'news',
		text: 'Tin tức',
	},
	tipsTricks: {
		value: 'tips--tricks',
		text: 'Mẹo & Thủ thuật',
	},
	carReviews: {
		value: 'car-reviews',
		text: 'Đánh giá xe',
	},
};

export const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp', 'tiff'];

export const videoExtensions = ['mp4', 'avi', 'mov', 'mkv'];

export enum FileType {
	IMAGE = 'IMAGE',
	VIDEO = 'VIDEO',
}

// 20% - 80%
export const prepaidPercentage = new Array(7).fill(null)?.map((_, index) => ({
	label: `${(index + 2) * 10}%`,
	value: ((index + 2) * 10).toString(),
}));

// 1 year - 10 year
export const borrowedTime = new Array(10).fill(null)?.map((_, index) => ({
	label: `${index + 1} năm`,
	value: (index + 1).toString(),
}));

export enum keysQuery {
	STATUS = 'trang-thai',
	PROVINCE = 'tinh-thanh',
	BRAND = 'hang-xe',
	MODEL = 'dong-xe',
	VERSION = 'phien-ban',
	CURRENCY = 'tien-te',
	MIN_PRICE = 'gia-thap-nhat',
	MAX_PRICE = 'gia-cao-nhat',
	PRICE = 'gia',
	SORY_BY = 'sap-xep',
	PREPAID_PERCENTAGE = 'tra-truoc',
	BORROWED_TIME = 'thoi-han-vay',
	INTEREST = 'lai-xuat',
	FORM_PAYMENT = 'hinh-thuc-chi-tra',
	ALL = 'tat-ca',
	TAB = 'tab',
}

export enum FetchPolicyEnum {
	CACHE_FIRST = 'cache-first',
	NETWORK_ONLY = 'network-only',
	CACHE_ONLY = 'cache-only',
	NO_CACHE = 'no-cache',
	STANDBY = 'standby',
	CACHE_AND_NETWORK = 'cache-and-network',
}

export const COUNTRY_DEFAULT = 'VN';

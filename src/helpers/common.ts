import { CalculateRollingPriceProps, InstallmentEstimateDetailLinkProps, KeySearchVi, LangSupport } from 'src/types';
import { CarConditionEnum, LanguageEnum, PaymentItemCurrencyEnum } from 'src/graphql/type.interface';
import { CONDITIONTYPE, keysQuery, LINK_DOWN_APP, TRANSMISSIONTYPE } from './constant';
import slugify from 'slugify';

export const getLanguage = (lang?: LangSupport): LanguageEnum => {
	switch (lang) {
		case 'en':
			return LanguageEnum.EN;
		default:
			return LanguageEnum.VI;
	}
};

export const formatNumber = (num: any) => {
	if (!num) return '';
	const number = parseInt(num, 0);
	return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export const getTextLang = (textVI?: string, textEN?: string, lang?: string | LanguageEnum) => {
	let text = textVI;
	switch (lang) {
		case 'EN':
			text = textEN;
			break;
		case 'en':
			text = textEN;
			break;
		default:
			break;
	}
	return text ?? '';
};

export const formatTransmisstionType = (type?: string) => {
	if (!type) {
		return '-';
	}

	return TRANSMISSIONTYPE.find((it) => it?.value === type)?.text ?? '-';
};

export const formatConditionType = (type?: string) => {
	if (!type) {
		return '-';
	}

	return CONDITIONTYPE.find((it) => it?.value === type)?.text ?? '-';
};

export const formatCurrency = (currency: string) => {
	if (currency.toUpperCase() === PaymentItemCurrencyEnum.VND) return 'VNĐ';
	else if (currency.toUpperCase() === PaymentItemCurrencyEnum.USD) return 'USD';
	else return '';
};

export function formatMoney(value: any) {
	value = Number(value);
	if (typeof value !== 'number') {
		return '';
	}

	const suffixes = ['', 'nghìn', 'triệu', 'tỷ'];
	let suffixIndex = 0;

	while (value >= 1000) {
		value /= 1000;
		suffixIndex++;
	}

	let formattedValue = '';

	if (value >= 100) {
		formattedValue = value.toString();
	} else if (value >= 10) {
		formattedValue = value.toString().replace(/\.0$/, '');
	} else {
		formattedValue = value.toString().replace(/\.0+$/, '');
	}

	if (formattedValue?.length !== 5) {
		formattedValue = formattedValue.substring(0, 5);
	}

	if (suffixIndex > 0) {
		formattedValue += ' ' + suffixes[suffixIndex];
	}

	return formattedValue;
}

function formatAmount(amount: number): string {
	if (amount >= 1000000000) {
		return Math.floor(amount / 1000000000) + '.xx tỷ';
	} else if (amount >= 1000000) {
		return Math.floor(amount / 100000000) + 'xx triệu';
	} else {
		return amount.toString();
	}
}

export const calculateRollingPrice = (props?: CalculateRollingPriceProps) => {
	if (!props?.param || !props?.carPrice) {
		return '';
	}

	const price =
		Number(props?.carPrice) +
		(Number(
			props?.condition === CarConditionEnum.NEW
				? props?.param?.registrationFeeNewCar
				: props?.param?.registrationFeeOldCar,
		) *
			Number(props?.carPrice)) /
			100 +
		Number(props?.param?.registry) +
		Number(props?.param?.roadMaintenanceFee) +
		Number(props?.param?.civilInsurance) +
		Number(props?.param?.licensePlateFee) +
		Number((props?.param?.bodyInsuranceOneYear * Number(props?.carPrice)) / 100);

	if (props?.showHiddenPrice) {
		return formatAmount(Number(price));
	}

	return formatMoney(price);
};

export const calculateRollingPriceNoFixed = (props?: CalculateRollingPriceProps) => {
	if (!props?.param || !props?.carPrice) {
		return '';
	}

	const price =
		Number(props?.carPrice) +
		(Number(
			props?.condition === CarConditionEnum.NEW
				? props?.param?.registrationFeeNewCar
				: props?.param?.registrationFeeOldCar,
		) *
			Number(props?.carPrice)) /
			100 +
		Number(props?.param?.registry) +
		Number(props?.param?.roadMaintenanceFee) +
		Number(props?.param?.civilInsurance) +
		Number(props?.param?.licensePlateFee) +
		Number((props?.param?.bodyInsuranceOneYear * Number(props?.carPrice)) / 100);

	return price.toLocaleString() + ' VND';
};

export const handleInstallmentEstimateDetailLink = (props: InstallmentEstimateDetailLinkProps) => {
	type PropsKeys = keyof typeof props;

	const query = Object.keys(props)
		.filter((key) => props[key as PropsKeys])
		.map((key) => `${KeySearchVi[key as PropsKeys]}=${props[key as PropsKeys]}`)
		.join('&');

	return query ? `${query}` : '';
};

export function cutText(text: string, length = 150): string {
	// If the text is already shorter than the specified length, no need to cut
	if (text.length <= length) {
		return text;
	}

	// Find the nearest space character after the specified length
	const lastSpace = text.lastIndexOf(' ', length);

	// Cut the text at the space character
	const shortText = text.substring(0, lastSpace);

	return `${shortText}...`;
}

export const formatNumberLess10 = (num: number) => {
	return num < 10 ? `0${num}` : num;
};

export function detectPlatformDirectionApp() {
	const userAgent = navigator.userAgent;

	if (/iPad|iPhone|iPod/.test(userAgent) || /Mac/.test(userAgent)) {
		return {
			text: 'AppStore',
			link: LINK_DOWN_APP.appStore,
		};
	}

	if (/android/i.test(userAgent) || /Win/.test(userAgent)) {
		return {
			text: 'CHPlay',
			link: LINK_DOWN_APP.googlePlay,
		};
	}

	return {
		text: 'CHPlay',
		link: LINK_DOWN_APP.googlePlay,
	};
}

export const handleObjectQuery = async (router: any, key: string, value: any, path: string) => {
	const as: any = undefined;
	router.replace(
		{
			pathname: path,
			query: {
				...router.query,
				[key]: value,
			},
		},
		as,
		{ shallow: true },
	);
};

export const checkArraySelect = (string?: any) => {
	if (string === keysQuery.ALL || !string) {
		return [];
	} else return string.split(',') ?? [];
};

export const checkStringIsAll = (string: string) => {
	if (string === keysQuery.ALL) {
		return '';
	} else return string;
};

export const convertToSlug = (string: string): string => {
	const slug: string = slugify(string, {
		replacement: '-',
		remove: undefined,
		lower: true,
		strict: true,
		locale: 'vi',
		trim: true,
	});
	return slug ?? '';
};

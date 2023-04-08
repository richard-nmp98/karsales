// export function isInt(n: number) {
// 	return Number(n) === n && n % 1 === 0;
// }

export function isFloat(n: number) {
	return Number(n) === n && n % 1 !== 0;
}

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

	let formattedValue = (isFloat(value) ? value.toFixed(1) : value).toString();

	if (suffixIndex > 0) {
		formattedValue += ' ' + suffixes[suffixIndex];
	}

	formattedValue += ' VNĐ';

	return formattedValue;
}

export function trimWord(str: string, length: number = 200, suffix: string = '...') {
	if (str.length <= length) {
		return str;
	}
	const desc = str.split(' ');

	return desc.length > length ? desc.slice(0, length).join(' ') + suffix : desc.join(' ');
}

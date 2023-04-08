export const StringToSlug = (str: string): string => {
	// lower case all string
	str = str.toLowerCase();
	str = str
		.normalize('NFD') // convert to unicode
		.replace(/[\u0300-\u036f]/g, ''); // remove all accents

	// replace đĐ
	str = str.replace(/[đĐ]/g, 'd');

	str = str.replace(/([^0-9a-z-\s])/g, '');

	// replace space to -
	str = str.replace(/(\s+)/g, '-');
	str = str.replace(/-+/g, '-');
	str = str.replace(/^-+|-+$/g, '');

	return str;
};

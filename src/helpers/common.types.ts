export enum TEXTTYPE {
	H1 = 'h1',
	H2 = 'h2',
	H3 = 'h3',
	H4 = 'h4',
	P = 'p',
	SPAN = 'span',
}

export enum FONTWEIGHT {
	Inherit = 'inherit',
	Initial = 'initial',
	Unset = 'unset',
	Bold = 'bold',
	Normal = 'normal',
	Bolder = 'bolder',
	Lighter = 'lighter',
}

export enum FONTSTYLE {
	Inherit = 'inherit',
	Initial = 'initial',
	Italic = 'italic',
	Normal = 'normal',
	Oblique = 'oblique',
	Unset = 'unset',
}

export const TextType = [
	{ id: 1, value: TEXTTYPE.H1 },
	{ id: 2, value: TEXTTYPE.H2 },
	{ id: 3, value: TEXTTYPE.H3 },
	{ id: 4, value: TEXTTYPE.P },
	{ id: 5, value: TEXTTYPE.SPAN },
];
export const FontWeight = [
	{ id: 1, value: FONTWEIGHT.Normal },
	{ id: 2, value: FONTWEIGHT.Bold },
	{ id: 3, value: FONTWEIGHT.Bolder },
	{ id: 4, value: FONTWEIGHT.Inherit },
	{ id: 5, value: FONTWEIGHT.Initial },
	{ id: 6, value: FONTWEIGHT.Lighter },
	{ id: 7, value: FONTWEIGHT.Unset },
];
export const FontStyle = [
	{ id: 1, value: FONTSTYLE.Normal },
	{ id: 2, value: FONTSTYLE.Italic },
	{ id: 3, value: FONTSTYLE.Inherit },
	{ id: 4, value: FONTSTYLE.Initial },
	{ id: 5, value: FONTSTYLE.Oblique },
	{ id: 5, value: FONTSTYLE.Unset },
];

export enum NetworkCode {
	SUCCESS = 200,
	CREATED = 201,
}

export enum LANG {
	VI = 'vi',
	EN = 'en',
}

// export const Page_Special = ['contact-us', 'our-origin', 'lich-su', 'lien-he', 'lich-su-hinh-thanh', 'khoi-nguon'];
export const Page_Special = [''];

export enum DEVICETYPE {
	Mobile = 'mobile',
	Tablet = 'tablet',
	Desktop = 'desktop',
}

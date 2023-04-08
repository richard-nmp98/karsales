export const getPreloadImages = (
	data: Record<
		string,
		{
			displayName: string;
			[key: string]: any;
		}
	>,
) => {
	const items: string[] = [];
	for (const [, value] of Object.entries(data)) {
		if (value.displayName === 'AdaptiveImageSeo' || value.displayName === 'AdaptiveImage') {
			value?.props?.mobileSrc?.forEach((v: { preload?: boolean; src?: string }) => {
				if (v?.preload && v?.src) items.push(v.src);
			});

			value?.props?.desktopSrc?.forEach((v: { preload?: boolean; src?: string }) => {
				if (v?.preload && v?.src) items.push(v.src);
			});
			value?.props?.laptopSrc?.forEach((v: { preload?: boolean; src?: string }) => {
				if (v?.preload && v?.src) items.push(v.src);
			});
			value?.props?.tabletSrc?.forEach((v: { preload?: boolean; src?: string }) => {
				if (v?.preload && v?.src) items.push(v.src);
			});
		}
		if (value.displayName === 'ImageSeo' || value.displayName === 'Image') {
			if (value?.props?.src && value?.props?.preload) items.push(value?.props?.src);
		}
	}
	return items;
};

// @ts-ignore
import lz from 'lzutf8';

export const decodePageData = (base64?: string | null) => {
	try {
		return base64 ? JSON.parse(lz.decompress(lz.decodeBase64(base64))) : undefined;
	} catch {
		return undefined;
	}
};

export const basePath = process.env.NODE_ENV === 'production' ? '' : '';
export const isServer = typeof window === 'undefined';
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? '';
export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
export const FB_PAGE_ID = process.env.NEXT_PUBLIC_FB_PAGE_ID;
export const Page_Special = [''];

import { CarConditionEnum, CarPurchaseCostProvinceEntity, ReviewsEntity } from '@/graphql/type.interface';
import type { NextPage } from 'next';
import type { ComponentType } from 'react';

export type NextPageLayout<P = {}, IP = P> = NextPage<P, IP> & { Layout?: ComponentType<{ pageProps: P }> };

export type LangSupport = 'en' | 'vi';

export type SlideType = {
	title?: string;
	titles?: Array<string>;
	image_url?: string;
	description?: string;
	href?: string;
};

export type Media = {
	id: string;
	fileName: string;
	filePathSM: string;
	filePathLG: string;
	filePathOriginal: string;
	mimeType: string;
	uploadBy?: string | null;
	isDeleted: boolean;
	deletedAt?: string | null;
	createdAt: string;
	updatedAt?: string;
};

export type CarType = {
	title: string;
	slug: string;
	thumbnailUrl?: string;
	medias?: Media[];
	description?: string;
	updatedAt?: string;
	price?: number;
	currency?: string;
	brand?: string;
};

export type BrandType = {
	id: string;
	name: string;
	slug: string;
	image?: string | null;
	mediaId: string;
	isDisplayTopSearch: boolean;
	isActive: boolean;
	mediaDetail: Media;
};

export type PaginationMetaType = {
	itemCount: number;
	totalItems: number;
	itemsPerPage: number;
	totalPages: number;
	currentPage: number;
	next: string;
	previous: string;
};

export type PaginationLinksType = {
	first: string;
	previous: string;
	next: string;
	last: string;
};

export type ReviewCategoryType = {
	id: string;
	nameVi: string;
	nameEn: string;
	slug: string;
	isActive?: boolean | null;
	createdAt: string;
	updatedAt: string;
	total: number;
};

export type ReviewType = {
	id: string;
	nameVi: string;
	nameEn: string;
	descriptionVi: string;
	descriptionEn: string;
	mediaIds: string[];
	thumnail: string;
	category?: string;
	contentVi?: string;
	contentEn?: string;
	isActive: boolean;
	createdAt: string;
	updatedAt: string;
	medias?: Media[];
	categories: ReviewCategoryType;
};

export interface NewsItemSettingsProps {
	titleClassName?: string;
	imagePosition?: 'left' | 'right' | 'top' | 'bottom';
	showComment?: boolean;
	showView?: boolean;
	showDescription?: boolean;
	tag?: string;
	positionDateCommentView?: 'after-title' | 'after-description';
	archiveLink?: string;
	trimWordCount?: number;
}

export interface NewsProps extends NewsItemSettingsProps {
	postReview: ReviewsEntity;
}

export interface CarouselSwiperProps extends NewsItemSettingsProps {
	id?: string;
	title?: string;
	swiperOptions?: object;
	items: ReviewsEntity[];
}

export type CalculateRollingPriceProps = {
	carPrice?: string;
	showHiddenPrice?: boolean;
	condition?: CarConditionEnum | null;
	param?: CarPurchaseCostProvinceEntity | null;
};

export type InstallmentEstimateDetailLinkProps = {
	brand?: number | string;
	model?: number | string;
	version?: number | string;
	price?: number | string;
	province?: number | string;
	pepaidPercent?: number | string;
	interestRate?: number | string;
	borrowedTime?: number | string;
	status?: string;
};

export enum KeySearchVi {
	brand = 'hang-xe',
	model = 'dong-xe',
	version = 'phien-ban',
	price = 'gia',
	province = 'tinh-thanh',
	pepaidPercent = 'tra-truoc',
	interestRate = 'lai-xuat',
	borrowedTime = 'thoi-han-vay',
	status = 'trang-thai',
}

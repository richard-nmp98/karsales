import React, { createContext, ReactNode, useContext, useState } from 'react';
import {
	CarBrandEntity,
	CarModelEntity,
	CarPurchaseCostProvinceEntity,
	CarVersionEntity,
	ReviewsEntity,
} from '@/graphql/type.interface';

type IgnoreReviewCategoryNews = {
	leastNews: ReviewsEntity[];
	allNews: ReviewsEntity[];
};

type AppStateProps = {
	reViewsCategoryNews?: IgnoreReviewCategoryNews;
	leastNews: ReviewsEntity[];
	allNews: ReviewsEntity[];
	vehicleNews?: ReviewsEntity[];
	relatedIgnore?: any[];
	carVersion?: CarVersionEntity;
	carPurchaseCostProvince?: CarPurchaseCostProvinceEntity;
	carBrand?: CarBrandEntity;
	carModel?: CarModelEntity;
};

const defaultValues = {
	leastNews: [],
	allNews: [],
	vehicleNews: [],
	relatedIgnore: [],
};

const AppStateContext = createContext<Record<any, any>>({});

export function useAppState() {
	return useContext(AppStateContext);
}

export function AppContextProvider({ children }: { children: ReactNode }) {
	const [appState, setAppState] = useState<AppStateProps>(defaultValues);

	return <AppStateContext.Provider value={{ appState, setAppState }}>{children}</AppStateContext.Provider>;
}

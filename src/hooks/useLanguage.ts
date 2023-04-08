import { useMemo } from 'react';
import type { LanguageEnum } from 'src/graphql/type.interface';
import { useLocale } from 'src/hooks/useLocale';

export function useLanguage(): LanguageEnum {
	const locale = useLocale();

	const lang = useMemo(() => (locale === 'en' ? 'EN' : 'VI'), [locale]);

	return lang;
}

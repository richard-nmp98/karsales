import { createContext } from 'react';

export const LocaleContext = createContext<'vi' | 'en' | null | undefined>('vi');

export const LocaleProvider = LocaleContext.Provider;
export const LocaleCustomer = LocaleContext.Consumer;

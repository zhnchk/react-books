import { IBook } from '@/types/book';
import { Filter } from '@/types/filter';
import { createContext, useContext } from 'react';

interface IDashboardContext {
	books: IBook[] | null;
	filterState: [Filter, React.Dispatch<React.SetStateAction<Filter>> | null];
}

export const DashboardContext = createContext<IDashboardContext>({ books: null, filterState: [Filter.ACTIVE, null] });

export const useDashboardContext = () => {
	return useContext(DashboardContext);
};

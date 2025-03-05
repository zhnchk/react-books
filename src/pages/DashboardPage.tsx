// components
import { MainTable } from '@/components/MainTable';
import { MainTableActions } from '@/components/MainTableActions';
// data
import { SERVER_BASE_URL } from '@/data/server-url';
// hooks
import { DashboardContext } from '@/hooks/useDashboardContext';
// types
import { IBook } from '@/types/book';
import { Filter } from '@/types/filter';
// react
import { useEffect, useState } from 'react';

export const DashboardPage: React.FC = () => {
	const [books, setBooks] = useState<IBook[] | null>(null);
	const [filter, setFilter] = useState<Filter>(Filter.ACTIVE);

	useEffect(() => {
		fetch(`${SERVER_BASE_URL}/books`)
			.then((response) => response.json() as Promise<IBook[]>)
			.then((books) => {
				const activeBooks = books.filter((book) => {
					if (filter === Filter.ACTIVE && book.isActive) return true;
				});
				const deactivatedBooks = books.filter((book) => {
					if (filter === Filter.DEACTIVATED && !book.isActive) return true;
				});

				if (filter === Filter.ACTIVE) setBooks(activeBooks);
				else if (filter === Filter.DEACTIVATED) setBooks(deactivatedBooks);
				else setBooks(books);
			})
			.catch((error) => console.error(error));
	}, [filter, books]);

	return (
		<DashboardContext.Provider value={{ books, filterState: [filter, setFilter] }}>
			<MainTableActions />
			<MainTable />
		</DashboardContext.Provider>
	);
};

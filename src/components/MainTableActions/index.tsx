// chakra ui
import { Flex } from '@chakra-ui/react';
// components
import { FilterMenu } from './FilterMenu';
import { RedirectButton } from '@/components/ui/RedirectButton';
// data
import { SERVER_BASE_URL } from '@/data/server-url';
// hooks
import { useDashboardContext } from '@/hooks/useDashboardContext';
// types
import { IBook } from '@/types/book';
// react
import { useEffect, useState } from 'react';

export const MainTableActions: React.FC = () => {
	const [allBooks, setAllBooks] = useState<IBook[] | null>(null);
	const { books } = useDashboardContext();

	useEffect(() => {
		fetch(`${SERVER_BASE_URL}/books`)
			.then((response) => response.json() as Promise<IBook[]>)
			.then((books) => setAllBooks(books))
			.catch((error) => console.error(error));
	}, [books]);

	return (
		<Flex mb='20px' alignItems='center' justifyContent='space-between'>
			<FilterMenu />
			{books?.length + '/' + allBooks?.length}
			<RedirectButton to='/create' size='sm' colorPalette='blue' variant='outline'>
				Add a Book
			</RedirectButton>
		</Flex>
	);
};

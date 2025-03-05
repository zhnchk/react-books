import { Table } from '@chakra-ui/react';
import { BookActions } from './BookActions';
import { useDashboardContext } from '@/hooks/useDashboardContext';

interface IMainTableProps {}

const columns = ['Title', 'Author', 'Category', 'ISBN', 'Created At', 'Modified At', 'Actions'];

export const MainTable: React.FC<IMainTableProps> = () => {
	const { books } = useDashboardContext();

	return (
		<Table.ScrollArea borderWidth='1px' maxW='100%'>
			<Table.Root size='sm' variant='outline'>
				<Table.Header>
					<Table.Row>
						{columns.map((column, i) => {
							return (
								<Table.ColumnHeader key={column} textAlign={i === columns.length - 1 ? 'end' : 'start'}>
									{column}
								</Table.ColumnHeader>
							);
						})}
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{books?.map((book) => (
						<Table.Row key={book.id} color={book.isActive ? '' : 'gray'}>
							<Table.Cell>{book.title}</Table.Cell>
							<Table.Cell>{book.author}</Table.Cell>
							<Table.Cell>{book.category}</Table.Cell>
							<Table.Cell>{book.isbn}</Table.Cell>
							<Table.Cell>{book.createdAt}</Table.Cell>
							<Table.Cell>{book.modifiedAt}</Table.Cell>
							<Table.Cell textAlign='end'>
								<BookActions book={book} />
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>
		</Table.ScrollArea>
	);
};

import { MdDeleteOutline } from 'react-icons/md';
import { MenuItem } from '../../ui/chakra/menu';
import { IBook } from '@/types/book';
import { SERVER_BASE_URL } from '@/data/server-url';

interface IDeleteActionProps {
	book: IBook;
}

export const DeleteAction: React.FC<IDeleteActionProps> = ({ book }) => {
	const deleteBookHandler: React.MouseEventHandler<HTMLDivElement> = () => {
		fetch(`${SERVER_BASE_URL}/books/${book.id}`, {
			method: 'DELETE',
		}).catch((error) => console.error(error));
	};

	return (
		<MenuItem value='delete' color='fg.error' _hover={{ bg: 'bg.error', color: 'fg.error' }} disabled={book.isActive} onClick={deleteBookHandler}>
			<MdDeleteOutline />
			Delete
		</MenuItem>
	);
};

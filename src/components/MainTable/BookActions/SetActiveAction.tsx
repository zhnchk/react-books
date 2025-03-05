import { SERVER_BASE_URL } from '@/data/server-url';
import { IBook } from '@/types/book';
import { MenuItem } from '@chakra-ui/react';
import { VscActivateBreakpoints } from 'react-icons/vsc';

interface ISetActiveActionProps {
	book: IBook;
}

export const SetActiveAction: React.FC<ISetActiveActionProps> = ({ book }) => {
	const changeIsActiveHandler: React.MouseEventHandler<HTMLDivElement> = () => {
		fetch(`${SERVER_BASE_URL}/books/${book.id}`, {
			method: 'PATCH',
			headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
			body: JSON.stringify({ isActive: !book.isActive }),
		}).catch((error) => console.error(error));
	};

	return (
		<MenuItem value='change state' onClick={changeIsActiveHandler}>
			<VscActivateBreakpoints />
			{book.isActive ? 'Deactivate' : 'Re-Activate'}
		</MenuItem>
	);
};

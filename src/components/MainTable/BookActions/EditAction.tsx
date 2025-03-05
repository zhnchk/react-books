import { IBook } from '@/types/book';
import { MenuItem } from '@chakra-ui/react';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { useNavigate } from 'react-router';

interface IEditActionProps {
	book: IBook;
}

export const EditAction: React.FC<IEditActionProps> = ({ book }) => {
	let navigate = useNavigate();

	return (
		<MenuItem value='edit' onClick={() => navigate('/edit/' + book.id)}>
			<MdOutlineModeEditOutline />
			Edit
		</MenuItem>
	);
};

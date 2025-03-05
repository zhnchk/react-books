// chakra ui
import { Button } from '@chakra-ui/react';
// components
import { MenuContent, MenuRoot, MenuTrigger } from '@/components/ui/chakra/menu';
import { DeleteAction } from './DeleteAction';
import { EditAction } from './EditAction';
import { SetActiveAction } from './SetActiveAction';
// types
import { IBook } from '@/types/book';
// react icons
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';

interface IBookActionsProps {
	book: IBook;
}

export const BookActions: React.FC<IBookActionsProps> = ({ book }) => {
	return (
		<MenuRoot positioning={{ placement: 'bottom-end' }}>
			<MenuTrigger asChild>
				<Button variant='outline' size='sm'>
					<PiDotsThreeOutlineVerticalFill />
				</Button>
			</MenuTrigger>
			<MenuContent>
				<SetActiveAction book={book} />
				<EditAction book={book} />
				<DeleteAction book={book} />
			</MenuContent>
		</MenuRoot>
	);
};

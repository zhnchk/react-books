// chakra ui
import { Button, Flex, Input } from '@chakra-ui/react';
import { Field } from '@/components/ui/chakra/field';
// components
import { RedirectButton } from '@/components/ui/RedirectButton';
import { Select } from '@/components/ui/Select';
// utils
import { parseDate } from '@/utils/parseDate';
// data
import { CATEGORIES } from '@/data/categories';
import { SERVER_BASE_URL } from '@/data/server-url';
// types
import { IBook } from '@/types/book';
// react router
import { useNavigate } from 'react-router';
// react icons
import { IoMdArrowRoundBack } from 'react-icons/io';
// react
import { useEffect, useState } from 'react';
// uuid
import { v4 as uuid } from 'uuid';

interface IBookFormProps {
	book: IBook | null;
}

export const BookForm: React.FC<IBookFormProps> = ({ book = null }) => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [isbn, setIsbn] = useState('');
	const [category, setCategory] = useState<string[]>([]);

	let navigate = useNavigate();
	const isDisabledSubmit = !(title && author && isbn.length >= 13 && category.length > 0);

	useEffect(() => {
		if (book) {
			setTitle(book.title);
			setAuthor(book.author);
			setIsbn(book.isbn.toString());
			setCategory([book.category]);
		}
	}, [book]);

	const onSubmitHandler: React.FormEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();

		const newBook: IBook = {
			id: book?.id || uuid(),
			title,
			author,
			category: category[0],
			isbn: +isbn,
			isActive: book?.isActive || true,
			createdAt: book?.createdAt || parseDate(new Date()),
			modifiedAt: book?.id ? parseDate(new Date()) : '-',
		};

		if (book) {
			fetch(`${SERVER_BASE_URL}/books/${book.id}`, {
				method: 'PUT',
				headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
				body: JSON.stringify(newBook),
			})
				.then(() => navigate('/'))
				.catch((error) => console.error(error));
		} else {
			fetch(`${SERVER_BASE_URL}/books`, {
				method: 'POST',
				headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
				body: JSON.stringify(newBook),
			})
				.then(() => navigate('/'))
				.catch((error) => console.error(error));
		}
	};

	return (
		<>
			<RedirectButton to='/' size='sm' variant='outline' colorPalette='blue' mb='5'>
				<IoMdArrowRoundBack /> Dashboard
			</RedirectButton>

			<Flex flexDirection='column' gap='5'>
				<Field label='Title' required>
					<Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder={'Enter your book title'} />
				</Field>

				<Field label='Author' required>
					<Input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder={'Enter an author'} />
				</Field>

				<Field label='Category' required>
					<Select options={CATEGORIES} value={category} setValue={setCategory} title='Select category' />
				</Field>

				<Field label='ISBN' required>
					<Input value={isbn} onChange={(e) => setIsbn(e.target.value)} placeholder={'Enter ISBN'} type='number' minLength={13} />
				</Field>

				<Button w='36' onClick={onSubmitHandler} disabled={isDisabledSubmit}>
					{book ? 'Edit Book' : 'Add Book'}
				</Button>
			</Flex>
		</>
	);
};

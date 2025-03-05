// components
import { BookForm } from '@/components/BookForm';
// data
import { SERVER_BASE_URL } from '@/data/server-url';
//types
import { IBook } from '@/types/book';
// react
import { useEffect, useState } from 'react';
// react router
import { useParams } from 'react-router';

export const BookFormPage: React.FC = () => {
	const { bookId } = useParams();
	const [book, setBook] = useState<IBook | null>(null);

	useEffect(() => {
		if (bookId) {
			const fetchBook = async () => {
				await fetch(`${SERVER_BASE_URL}/books/${bookId}`)
					.then((response) => response.json() as Promise<IBook>)
					.then((data) => setBook(data))
					.catch((error) => console.error(error));
			};

			fetchBook();
		}
	}, []);

	return <BookForm book={book} />;
};

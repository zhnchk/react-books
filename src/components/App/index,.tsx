import { Layout } from '@/components/Layout';
import { BookFormPage } from '@/pages/BookFormPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { Route, Routes } from 'react-router';

const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<DashboardPage />} />
				<Route path='edit/:bookId' element={<BookFormPage />} />
				<Route path='create/' element={<BookFormPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
};

export default App;

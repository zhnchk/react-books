import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from '@/components/ui/chakra/provider.tsx';
import { BrowserRouter } from 'react-router';
import App from './components/App/index,.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</StrictMode>,
);

import { Container, Flex } from '@chakra-ui/react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router';

export const Layout: React.FC = () => {
	return (
		<Flex direction='column' h='100vh'>
			<Header />
			<Flex flex='1 1 auto' as='main'>
				<Container maxW={'container.xl'}>
					<Outlet />
				</Container>
			</Flex>
			<Footer />
		</Flex>
	);
};

import { Link as ChakraLink } from '@chakra-ui/react';
import { Alert } from '@chakra-ui/react';
import { LuExternalLink } from 'react-icons/lu';
import { Link } from 'react-router';

export const NotFoundPage: React.FC = () => {
	return (
		<Alert.Root status='error' fontSize='xl'>
			<Alert.Indicator />
			<Alert.Title>
				Ooops! There are no books here! Please, return to{' '}
				<ChakraLink fontWeight='bold' asChild>
					<Link to='/'>
						the Home Page <LuExternalLink />
					</Link>
				</ChakraLink>
			</Alert.Title>
		</Alert.Root>
	);
};

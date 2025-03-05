import { Box, Container, Link, Separator } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { LuExternalLink } from 'react-icons/lu';

export const Footer: React.FC = () => {
	return (
		<>
			<Separator />
			<Box as='footer' py='5'>
				<Container maxW={'container.lg'} textAlign='center'>
					<Link href='https://github.com/zhnchk/react-books' target='_blank' colorPalette='blue' mr='5'>
						<AiFillGithub size='40' />
						Visit this project <LuExternalLink />
					</Link>
				</Container>
			</Box>
		</>
	);
};

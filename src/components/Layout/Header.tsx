import { Box, Container, Flex, Separator, Text } from '@chakra-ui/react';
import { ColorModeButton } from '@/components/ui/chakra/color-mode';

export const Header: React.FC = () => {
	return (
		<Box as='header' pb='8'>
			<Container maxW={'container.lg'}>
				<Flex alignItems='center' justifyContent='space-between' py='3'>
					<Text as='h1' fontWeight='bold' fontSize={['5xl', '6xl', '6xl', '7xl']}>
						<Text color='blue.500' as='span'>
							B
						</Text>
						ooks
					</Text>
					<ColorModeButton size='md' colorPalette='blue' />
				</Flex>
			</Container>
			<Separator />
		</Box>
	);
};

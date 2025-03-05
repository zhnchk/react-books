import { Button, ButtonProps } from '@chakra-ui/react';
import { Link } from 'react-router';

interface IRedirectButtonProps extends ButtonProps {
	to: string;
	children: React.ReactNode;
}

export const RedirectButton: React.FC<IRedirectButtonProps> = ({ children, to, ...buttonProps }) => {
	return (
		<Button {...buttonProps} asChild>
			<Link to={to}>{children}</Link>
		</Button>
	);
};

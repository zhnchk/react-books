import { createListCollection, SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValueText } from '@chakra-ui/react';

interface ISelectProps {
	options: Array<{ label: string; value: string }>;
	title: string;
	value: string[];
	setValue: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Select: React.FC<ISelectProps> = ({ options, title, value, setValue }) => {
	const collection = createListCollection({
		items: options,
	});

	return (
		<SelectRoot
			collection={collection}
			value={value}
			onValueChange={(e) => {
				setValue(e.value);
			}}
			width='100%'
			required>
			<SelectTrigger>
				<SelectValueText placeholder={title} />
			</SelectTrigger>

			<SelectContent>
				{collection.items.map((item) => (
					<SelectItem item={item} key={item.value}>
						{item.label}
					</SelectItem>
				))}
			</SelectContent>
		</SelectRoot>
	);
};

// chakra ui
import { Button } from '@chakra-ui/react';
import { MenuContent, MenuRadioItem, MenuRadioItemGroup, MenuRoot, MenuTrigger } from '@/components/ui/chakra/menu';
// types
import { Filter } from '@/types/filter';
// hooks
import { useDashboardContext } from '@/hooks/useDashboardContext';
// react icons
import { HiSortAscending } from 'react-icons/hi';

interface IFilterMenuProps {}

export const FilterMenu: React.FC<IFilterMenuProps> = () => {
	const { filterState } = useDashboardContext();
	const filter = filterState?.[0];
	const setFilter = filterState?.[1];

	if (setFilter) {
		return (
			<MenuRoot>
				<MenuTrigger asChild>
					<Button variant='outline' size='sm'>
						<HiSortAscending /> Sort
					</Button>
				</MenuTrigger>
				<MenuContent minW='10rem'>
					<MenuRadioItemGroup value={filter} onValueChange={(e) => setFilter(e.value as Filter)}>
						<MenuRadioItem value={Filter.ACTIVE}>Show Active</MenuRadioItem>
						<MenuRadioItem value={Filter.DEACTIVATED}>Show Deactivated</MenuRadioItem>
						<MenuRadioItem value={Filter.ALL}>Show All</MenuRadioItem>
					</MenuRadioItemGroup>
				</MenuContent>
			</MenuRoot>
		);
	}
};

import { FormItem, Group, Header, Panel, SegmentedControl } from '@vkontakte/vkui';
import React, { memo } from 'react';

import { GroupList } from '@/entities';
import { RootState, useAppDispatch, useAppSelector } from '@/shared/store';

import { FILTERS_TAB } from '../config/filter-tab.config';
import { setFilterTab } from '../model/filter-tab.slice';

const header = <Header>Список сообществ</Header>;

const FilterTab = memo(() => {
  const dispatch = useAppDispatch();
  const selectedColors = useAppSelector((state: RootState) => state.filterPanel.colors);
  const selectedFriends = useAppSelector((state: RootState) => state.filterPanel.friends);
  const selectedTab = useAppSelector((state: RootState) => state.filterTab.tab);
  const filtersCount = useAppSelector((state: RootState) => state.filterPanel.filtersCount);

  return (
    <Panel>
      <Group header={header}>
        <FormItem>
          <SegmentedControl
            value={selectedTab}
            onChange={(value) => dispatch(setFilterTab(value))}
            name="private-type-segment"
            options={FILTERS_TAB}
          />
        </FormItem>
        <GroupList
          selectedColors={selectedColors}
          selectedFriends={selectedFriends}
          selectedTab={selectedTab}
          filtersCount={filtersCount}
        />
      </Group>
    </Panel>
  );
});

export default FilterTab;

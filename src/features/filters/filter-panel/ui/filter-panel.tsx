import { Icon24Filter } from '@vkontakte/icons';
import {
  Counter,
  Group,
  Panel,
  SplitCol,
  SplitLayout,
  SubnavigationBar,
  SubnavigationButton,
  VisuallyHidden,
} from '@vkontakte/vkui';
import { memo } from 'react';

import FilterTab from '../../filter-tab';
import { useFilterPanel } from '../lib/filter-panel.hook';
import FilterPanelModal from './filter-panel-modal';

const FilterPanel = memo(() => {
  const { filtersCount, includesFriends, toggleModal, handleFriendsChange } = useFilterPanel();

  return (
    <SplitLayout modal={<FilterPanelModal />}>
      <SplitCol>
        <Panel>
          <Group>
            <SubnavigationBar>
              <SubnavigationButton
                before={<Icon24Filter />}
                selected={filtersCount > 0}
                expandable
                after={
                  filtersCount > 0 && (
                    <Counter size="s">
                      <VisuallyHidden>Применено: </VisuallyHidden>
                      {filtersCount}
                    </Counter>
                  )
                }
                onClick={toggleModal}
              >
                Фильтры
              </SubnavigationButton>

              <SubnavigationButton selected={includesFriends} onClick={handleFriendsChange}>
                Мои друзья подписаны
              </SubnavigationButton>
            </SubnavigationBar>
          </Group>
        </Panel>
        <FilterTab />
      </SplitCol>
    </SplitLayout>
  );
});

export default FilterPanel;

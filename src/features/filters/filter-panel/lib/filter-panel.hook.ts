import { usePlatform, useScrollLock } from '@vkontakte/vkui';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/shared/store';

import {
  onApplyFilters,
  setFilterColors,
  setFriends,
  toggleModalOpen,
} from '../model/filter-panel.slice';

export const useFilterPanel = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.filterPanel.isModalOpen);
  const filterColors = useSelector((state: RootState) => state.filterPanel.colors);
  const filtersCount = useSelector((state: RootState) => state.filterPanel.filtersCount);
  const includesFriends = useSelector((state: RootState) => state.filterPanel.friends);

  const platform = usePlatform();

  useScrollLock(isModalOpen);

  const toggleModal = useCallback(() => {
    dispatch(toggleModalOpen());
  }, [dispatch]);

  const handleChangeColor = useCallback(
    (value: string, checked: boolean) => {
      dispatch(setFilterColors({ value, checked }));
    },
    [dispatch]
  );

  const handleFriendsChange = useCallback(() => {
    dispatch(setFriends(!includesFriends));
  }, [dispatch, includesFriends]);

  const handleApplyFilters = useCallback(() => {
    dispatch(onApplyFilters());
  }, [dispatch]);

  const setChecked = useCallback(
    (value: string) => {
      return filterColors[value]?.checked || false;
    },
    [filterColors]
  );

  return {
    platform,
    isModalOpen,
    setChecked,
    filtersCount,
    includesFriends,
    toggleModal,
    handleChangeColor,
    handleFriendsChange,
    handleApplyFilters,
  };
};

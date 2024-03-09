import { SegmentedControlValue } from '@vkontakte/vkui/dist/components/SegmentedControl/SegmentedControl';

import { Colors } from '@/features/filters/filter-panel/config/filter-panel.types';

import { Group } from '../config/groups.types';

export const filterGroups = (
  groups: Group[],
  colors: Colors,
  friends: boolean,
  tab: SegmentedControlValue
): Group[] => {
  const colorsWithApply = Object.entries(colors)
    .filter(([, details]) => details.apply)
    .map(([color]) => color);

  const filteredGroups = groups?.filter((group) => {
    const groupColor = group.avatar_color || '';
    const passColorFilter = colorsWithApply.length === 0 || colors[groupColor]?.apply;
    const passFriendsFilter = !friends || (group.friends && group.friends.length > 0);

    if (tab === 'all') {
      return passColorFilter && passFriendsFilter;
    } else if (tab === 'private') {
      return passColorFilter && passFriendsFilter && group.closed === true;
    } else if (tab === 'public') {
      return passColorFilter && passFriendsFilter && group.closed === false;
    }

    return false;
  });

  return filteredGroups;
};

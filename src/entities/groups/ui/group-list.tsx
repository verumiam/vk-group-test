import { Icon16LockOutline } from '@vkontakte/icons';
import { Avatar, Button, Div, RichCell, SimpleCell, Spinner } from '@vkontakte/vkui';
import { FC, memo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { RootState } from '@/shared/store';

import { useGetGroupsQuery } from '../api/groups-api';
import { FriendData, Group } from '../config/groups.types';
import { filterGroups } from '../lib/filter-groups';
import { getAvatarUrl } from '../lib/get-avatar-url';
import GroupGallery from './group-gallery';
import GroupGalleryItem from './group-gallery-item';
import GroupGalleryTitle from './group-gallery-title';

interface GroupList {
  selectedColors: RootState['filterPanel']['colors'];
  selectedFriends: RootState['filterPanel']['friends'];
  selectedTab: RootState['filterTab']['tab'];
  filtersCount: RootState['filterPanel']['filtersCount'];
}

const GroupList: FC<GroupList> = memo(({ selectedColors, selectedFriends, selectedTab }) => {
  const { data: groups, isFetching, isLoading } = useGetGroupsQuery();

  const filteredGroups = filterGroups(
    groups?.data || [],
    selectedColors,
    selectedFriends,
    selectedTab
  );

  if (isFetching || isLoading) {
    return (
      <Spinner size="large" style={{ margin: '50px 0' }}>
        Ожидайте, ваши сообщества загружаются...
      </Spinner>
    );
  }

  const adapterFriendsData = (friends: Group['friends'] | undefined): FriendData[] => {
    if (!friends) {
      return [];
    }

    return [
      {
        title: <GroupGalleryTitle count={friends.length} />,
        detail: friends.map((friend) => (
          <GroupGalleryItem {...friend} key={`friend-${uuidv4()}`} />
        )),
      },
    ];
  };

  return (
    <Div aria-busy={isLoading && isFetching}>
      {filteredGroups?.map(({ id, name, closed, avatar_color, members_count, friends }) => (
        <SimpleCell
          key={id}
          after={<Button size="m">Отписаться</Button>}
          style={{ textAlign: 'left', flexWrap: 'wrap' }}
          before={<Avatar src={getAvatarUrl(avatar_color)} size={100} />}
          subtitle={adapterFriendsData(friends).map(({ title, detail }) => (
            <GroupGallery id={id} title={title} detail={detail} />
          ))}
        >
          <RichCell
            caption={
              <p style={{ display: 'flex', flexDirection: 'column' }}>
                {closed && (
                  <span
                    style={{
                      display: 'flex',
                      gap: '0 10px',
                      alignItems: 'center',
                      fontWeight: '600',
                    }}
                  >
                    Закрытое сообщество <Icon16LockOutline />
                  </span>
                )}
                <span>{members_count} подписчиков</span>
              </p>
            }
          >
            {name}
          </RichCell>
        </SimpleCell>
      ))}
    </Div>
  );
});

export default GroupList;

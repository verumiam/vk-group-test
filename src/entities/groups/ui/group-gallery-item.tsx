import { Avatar, HorizontalCell } from '@vkontakte/vkui';
import { FC, memo } from 'react';

import { User } from '../config/groups.types';
import { getAvatarUrl } from '../lib/get-avatar-url';

interface GroupGalleryItem {
  first_name: User['first_name'];
  last_name: User['last_name'];
}

const GroupGalleryItem: FC<GroupGalleryItem> = memo(({ first_name, last_name }) => {
  return (
    <HorizontalCell onClick={() => {}} size="s" header={`${first_name} ${last_name}`}>
      <Avatar alt={`avatar-${first_name}-${last_name}`} size={50} src={getAvatarUrl()} />
    </HorizontalCell>
  );
});

export default GroupGalleryItem;

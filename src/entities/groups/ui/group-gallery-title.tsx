import { UsersStack } from '@vkontakte/vkui';
import { FC, memo } from 'react';

import { getAvatarUrl } from '../lib/get-avatar-url';

interface GroupGalleryTitle {
  count?: number;
}

const GroupGalleryTitle: FC<GroupGalleryTitle> = memo(({ count }) => {
  if (!count || count > 3) return;

  const avatarUrls: string[] = Array.from({ length: count }, (_, index) =>
    getAvatarUrl(index.toString())
  );

  return <UsersStack photos={avatarUrls}>{count} общих друга</UsersStack>;
});

export default GroupGalleryTitle;

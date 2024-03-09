import { Accordion, Gallery } from '@vkontakte/vkui';
import { FC, memo, ReactNode, useState } from 'react';

interface GroupGallery {
  id: number;
  title: ReactNode;
  detail: ReactNode;
}

const GroupGallery: FC<GroupGallery> = memo(({ id, title, detail }) => {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <Accordion
      key={id}
      expanded={openId === id}
      onChange={(e) => (e ? setOpenId(id) : setOpenId(null))}
    >
      <Accordion.Summary>{title}</Accordion.Summary>
      <Accordion.Content>
        <Gallery arrowSize="m" showArrows bullets="dark" looped>
          {detail}
        </Gallery>
      </Accordion.Content>
    </Accordion>
  );
});

export default GroupGallery;

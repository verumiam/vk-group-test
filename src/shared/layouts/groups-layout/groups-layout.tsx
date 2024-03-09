import { Title } from '@vkontakte/vkui';

import { FilterPanel } from '@/features/filters';
import Layout from '@/pages/layout';

const GroupsLayout = () => {
  return (
    <Layout>
      <Title weight="2" style={{ fontSize: '36px', marginBottom: '30px' }}>
        Страница сообществ
      </Title>
      <FilterPanel />
    </Layout>
  );
};

export default GroupsLayout;

import { Title } from '@vkontakte/vkui';
import { FC } from 'react';

import Layout from '@/pages/layout';

const HomeLayout: FC = () => {
  return (
    <Layout className="layout_home" to="/groups">
      <Title weight="2" style={{ fontSize: '36px' }}>
        Профильное задание
      </Title>
      <Title level="2" weight="3" style={{ fontSize: '26px' }}>
        В команду сообществ
      </Title>
    </Layout>
  );
};

export default HomeLayout;

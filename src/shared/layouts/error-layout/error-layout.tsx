import { Title } from '@vkontakte/vkui';

import Layout from '@/pages/layout';

const ErrorLayout = () => {
  return (
    <Layout className="layout_error">
      <Title weight="2" style={{ fontSize: '36px' }}>
        Страница не найдена
      </Title>
    </Layout>
  );
};

export default ErrorLayout;

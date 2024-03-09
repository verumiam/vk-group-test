import { Image } from '@vkontakte/vkui';
import clsx from 'clsx';
import { FC, HTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import vkLogo from '/vk_logo.ico';
import { Container } from '@/shared/container';

interface Layout extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  to?: string;
}

const Layout: FC<Layout> = ({ children, className, to = '/' }) => {
  return (
    <Container>
      <section className={clsx('layout', className)}>
        <Link to={to}>
          <Image src={vkLogo} className="logo" size={96} alt="VK logo" withTransparentBackground />
        </Link>
        {children}
      </section>
    </Container>
  );
};

export default Layout;

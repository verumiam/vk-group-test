import clsx from 'clsx';
import { FC, HTMLAttributes, ReactNode } from 'react';

import styles from './container.module.scss';

interface Container extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Container: FC<Container> = ({ children, className }) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};

export default Container;

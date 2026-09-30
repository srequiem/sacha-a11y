import type { AnchorHTMLAttributes, ReactNode } from 'react';

import styles from './ButtonLink.module.css';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum ButtonSize {
  Default = 'default',
  Small = 'small',
}

type ButtonLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

const ButtonLink = ({
  variant = ButtonVariant.Primary,
  size = ButtonSize.Default,
  children,
  ...anchorProps
}: ButtonLinkProps) => (
  <a className={`${styles.button} ${styles[variant]} ${styles[size]}`} {...anchorProps}>
    {children}
  </a>
);

export default ButtonLink;

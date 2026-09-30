import { SITE } from '@/lib/site';

import { ButtonLink, ButtonSize, ButtonVariant, Container } from '@/components/ui';

import styles from './SiteHeader.module.css';

const SiteHeader = () => (
  <header className={styles.header}>
    <Container>
      <div className={styles.inner}>
        <p className={styles.brand}>
          <span className={styles.name}>{SITE.name}</span>
          <span className={styles.tagline}>{SITE.tagline}</span>
        </p>
        <ButtonLink href="#contact" variant={ButtonVariant.Secondary} size={ButtonSize.Small}>
          Diagnostic express gratuit
        </ButtonLink>
      </div>
    </Container>
  </header>
);

export default SiteHeader;

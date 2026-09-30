import { SITE } from '@/lib/site';

import { Container } from '@/components/ui';

import { FOOTER } from '../../content';

import styles from './SiteFooter.module.css';

const SiteFooter = () => (
  <footer className={styles.footer}>
    <Container>
      <div className={styles.inner}>
        <p>{FOOTER.statement}</p>
        <p>
          © {new Date().getFullYear()} {SITE.name}
        </p>
      </div>
    </Container>
  </footer>
);

export default SiteFooter;

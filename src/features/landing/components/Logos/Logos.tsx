import Image from 'next/image';

import { Container } from '@/components/ui';

import { COMPANIES, LOGOS, PLACEHOLDER_IMAGE} from '../../content';

import styles from './Logos.module.css';

const Logos = () => (
  <section className={styles.logos} aria-labelledby="logos-title">
    <Container>
      <h2 id="logos-title" className={styles.title}>
        {LOGOS.title}
      </h2>
      <p className={styles.subtitle}>{LOGOS.subtitle}</p>
      <ul className={styles.list}>
        {COMPANIES.map(({ name, logoSrc }) => {
          // While a logo is still the placeholder, show the company name as text.
          const isPlaceholder = logoSrc === PLACEHOLDER_IMAGE;

          return (
            <li key={name} className={styles.item}>
              <Image
                className={styles.logo}
                src={logoSrc}
                alt={isPlaceholder ? '' : name}
                width={160}
                height={40}
                unoptimized
              />
              {isPlaceholder && <span className={styles.name}>{name}</span>}
            </li>
          );
        })}
      </ul>
    </Container>
  </section>
);

export default Logos;

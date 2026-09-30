import Image from 'next/image';

import { Container } from '@/components/ui';

import { COMPANIES, LOGOS} from '../../content';

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
          return (
            <li key={name} className={styles.item}>
              <Image
                className={styles.logo}
                src={logoSrc}
                alt={name}
                width={160}
                height={40}
                unoptimized
              />
            </li>
          );
        })}
      </ul>
    </Container>
  </section>
);

export default Logos;

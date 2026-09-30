import Image from 'next/image';

import { Container } from '@/components/ui';

import { ABOUT, PLACEHOLDER_IMAGE } from '../../content';

import styles from './About.module.css';

const About = () => {
  // While the photo is still the placeholder, it carries no information: empty alt.
  const isPlaceholder = ABOUT.photoSrc === PLACEHOLDER_IMAGE;

  return (
    <section id="qui-suis-je" className={styles.about} aria-labelledby="about-title">
      <Container>
        <div className={styles.grid}>
          <div className={styles.photoFrame}>
            <Image
              className={isPlaceholder ? `${styles.photo} ${styles.placeholder}` : styles.photo}
              src={ABOUT.photoSrc}
              alt={isPlaceholder ? '' : ABOUT.photoAlt}
              width={480}
              height={600}
              sizes="(min-width: 768px) 22rem, 100vw"
              unoptimized={isPlaceholder}
            />
          </div>

          <div className={styles.text}>
            <h2 id="about-title" className={styles.title}>
              {ABOUT.title}
            </h2>
            <p className={styles.intro}>{ABOUT.intro}</p>
            {ABOUT.paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
            <p className={styles.proof}>
              {ABOUT.proof.prefix}
              <a href={ABOUT.proof.href}>{ABOUT.proof.linkLabel}</a>
              {ABOUT.proof.suffix}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;

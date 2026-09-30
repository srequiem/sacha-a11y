import { ButtonLink, ButtonVariant, Container } from '@/components/ui';

import { HERO } from '../../content';
import { AUDIT_MAILTO_HREF, CALL_HREF } from '../../links';
import ScreenReaderCaption from '../ScreenReaderCaption/ScreenReaderCaption';

import styles from './Hero.module.css';

const Hero = () => (
  <section className={styles.hero} aria-labelledby="hero-title">
    <Container>
      <div className={styles.content}>
        <h1 id="hero-title" className={styles.title}>
          {HERO.titleLines.map((line) => (
            <span key={line} className={styles.titleLine}>
              {line}
            </span>
          ))}
        </h1>
        <p className={styles.lead}>{HERO.lead}</p>
        <div className={styles.actions}>
          <ButtonLink href={AUDIT_MAILTO_HREF}>{HERO.primaryCta}</ButtonLink>
          <ButtonLink href={CALL_HREF} variant={ButtonVariant.Secondary}>
            {HERO.secondaryCta}
          </ButtonLink>
        </div>
      </div>
      <ScreenReaderCaption />
    </Container>
  </section>
);

export default Hero;

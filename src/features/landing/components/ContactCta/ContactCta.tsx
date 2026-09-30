import { SITE } from '@/lib/site';

import { ButtonLink, ButtonVariant, Container } from '@/components/ui';

import { CONTACT } from '../../content';
import { AUDIT_MAILTO_HREF, CALL_HREF } from '../../links';

import styles from './ContactCta.module.css';

const ContactCta = () => (
  <section id="contact" className={styles.contact} aria-labelledby="contact-title">
    <Container>
      <div className={styles.card}>
        <h2 id="contact-title" className={styles.title}>
          {CONTACT.title}
        </h2>
        <p className={styles.lead}>{CONTACT.lead}</p>
        <div className={styles.actions}>
          <ButtonLink href={AUDIT_MAILTO_HREF}>{CONTACT.primaryCta}</ButtonLink>
          {/* <ButtonLink href={CALL_HREF} variant={ButtonVariant.Secondary}>
            {CONTACT.secondaryCta}
          </ButtonLink> */}
        </div>
        <p className={styles.email}>
          {CONTACT.emailPrefix} <a href={`https://fr.linkedin.com/in/sacharequiem`}>Linkedin</a>
        </p>
      </div>
    </Container>
  </section>
);

export default ContactCta;

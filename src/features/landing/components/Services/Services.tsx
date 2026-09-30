import { Container } from '@/components/ui';

import { SERVICES } from '../../content';

import styles from './Services.module.css';

const Services = () => (
  <section className={styles.services} aria-labelledby="services-title">
    <Container>
      <h2 id="services-title" className={styles.title}>
        {SERVICES.title}
      </h2>
      <ul className={styles.list}>
        {SERVICES.items.map(({ title, description, deliverable }) => (
          <li key={title} className={styles.item}>
            <h3 className={styles.itemTitle}>{title}</h3>
            <div className={styles.itemBody}>
              <p>{description}</p>
              <p className={styles.deliverable}>
                <strong className={styles.deliverableLabel}>Livrable :</strong> {deliverable}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default Services;

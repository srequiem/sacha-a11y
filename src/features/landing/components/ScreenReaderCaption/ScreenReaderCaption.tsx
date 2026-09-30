'use client';

import { SCREEN_READER_LINES } from '../../content';
import { useLineCycle } from '../../hooks/useLineCycle';

import styles from './ScreenReaderCaption.module.css';

const LINE_DURATION_MS = 2800;

// Decorative echo of a screen reader caption panel. Hidden from assistive tech
// (it would duplicate real content), pausable per WCAG 2.2.2, static under reduced motion.
const ScreenReaderCaption = () => {
  const { lineIndex, isPaused, isAnimated, canAnimate, togglePause } = useLineCycle(
    SCREEN_READER_LINES.length,
    LINE_DURATION_MS,
  );
  const line = SCREEN_READER_LINES[lineIndex];

  return (
    <figure className={styles.figure}>
      <div className={styles.panel} aria-hidden="true">
        <div className={styles.bar}>
          <span className={styles.signal} />
          Lecteur d’écran
        </div>
        <p key={lineIndex} className={isAnimated ? `${styles.line} ${styles.animated}` : styles.line}>
          <span className={styles.lineName}>{line.name}</span>
          <span className={styles.lineRole}>, {line.role}</span>
        </p>
        <ol className={styles.steps}>
          {SCREEN_READER_LINES.map((item, index) => (
            <li key={item.name} className={index === lineIndex ? `${styles.step} ${styles.stepActive}` : styles.step} />
          ))}
        </ol>
      </div>
      <figcaption className={styles.caption}>
        <span>Ce que vos utilisateurs entendent, élément par élément.</span>
        {canAnimate && (
          <button type="button" className={styles.toggle} onClick={togglePause}>
            {isPaused ? 'Reprendre l’animation' : 'Mettre l’animation en pause'}
          </button>
        )}
      </figcaption>
    </figure>
  );
};

export default ScreenReaderCaption;
  
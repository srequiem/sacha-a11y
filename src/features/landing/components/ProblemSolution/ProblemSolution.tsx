import { Container } from '@/components/ui';

import { LAW, PROBLEM, SOLUTION } from '../../content';

import styles from './ProblemSolution.module.css';

const ProblemSolution = () => (
  <>
    <section className={styles.problem} aria-labelledby="problem-title">
      <Container>
        <div className={styles.intro}>
          <h2 id="problem-title" className={styles.title}>
            {PROBLEM.title}
          </h2>
          <p className={styles.lead}>{PROBLEM.lead}</p>
        </div>

        <ul className={styles.challenges}>
          {PROBLEM.challenges.map(({ title, description }) => (
            <li key={title} className={styles.challenge}>
              <h3 className={styles.challengeTitle}>{title}</h3>
              <p className={styles.challengeText}>{description}</p>
            </li>
          ))}
        </ul>

        <div className={styles.law}>
          <h3 className={styles.lawTitle}>{LAW.title}</h3>
          <ol className={styles.milestones}>
            {LAW.milestones.map(({ dateTime, dateLabel, description }) => (
              <li key={dateTime} className={styles.milestone}>
                <time className={styles.milestoneDate} dateTime={dateTime}>
                  {dateLabel}
                </time>
                <p className={styles.milestoneText}>{description}</p>
              </li>
            ))}
          </ol>
          <p className={styles.disclaimer}>{LAW.disclaimer}</p>
        </div>
      </Container>
    </section>

    <section className={styles.solution} aria-labelledby="solution-title">
      <Container>
        <div className={styles.solutionGrid}>
          <div>
            <h2 id="solution-title" className={styles.title}>
              {SOLUTION.title}
            </h2>
            <p className={styles.lead}>{SOLUTION.lead}</p>
          </div>
          <dl className={styles.tools}>
            {SOLUTION.tools.map(({ name, usage }) => (
              <div key={name} className={styles.tool}>
                <dt className={styles.toolName}>{name}</dt>
                <dd className={styles.toolUsage}>{usage}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  </>
);

export default ProblemSolution;

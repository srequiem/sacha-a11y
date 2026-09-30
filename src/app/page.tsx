import {
  About,
  ContactCta,
  Hero,
  Logos,
  ProblemSolution,
  Services,
  SiteFooter,
  SiteHeader,
} from '@/features/landing';

const HomePage = () => (
  <>
    <SiteHeader />
    <main id="contenu" tabIndex={-1}>
      <Hero />
      <Logos />
      <ProblemSolution />
      <Services />
      <About />
      <ContactCta />
    </main>
    <SiteFooter />
  </>
);

export default HomePage;

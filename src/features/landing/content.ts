// All landing copy lives here, so wording changes never touch a component.

export type Company = {
  name: string;
  logoSrc: string;
};

export type ScreenReaderLine = {
  name: string;
  role: string;
};

export type Challenge = {
  title: string;
  description: string;
};

export type Tool = {
  name: string;
  usage: string;
};

export type LawMilestone = {
  dateTime: string;
  dateLabel: string;
  description: string;
};

export type Service = {
  title: string;
  description: string;
  deliverable: string;
};

export const HERO = {
  titleLines: [
    'Mettez vos applications en conformité WCAG & RGAA.',
    'Sans ralentir votre roadmap produit.',
  ],
  lead: 'Audit, correction du code et accompagnement de vos équipes, par un ingénieur frontend React-Ts-Nextjs avec plus de 6 ans d’expérience.',
  primaryCta: 'Demander mon diagnostic express',
  secondaryCta: 'Me contacter par e-mail',
} as const;


export const PLACEHOLDER_IMAGE = '/logos/react.svg';
// Replace each logoSrc with /logos/<company>.svg once the files are in /public/logos.
export const COMPANIES: Company[] = [
  { name: 'Deezer', logoSrc: '/logos/deezer.png' },
  { name: 'Devialet', logoSrc: '/logos/devialet.png' },
  { name: 'KissKissBankBank', logoSrc: '/logos/kisskiss.png' },
  { name: 'La Banque Postale', logoSrc: '/logos/labanquep.webp' },
];

export const LOGOS = {
  title: 'Ils m’ont fait confiance',
  subtitle: 'Plus de 6 ans d’ingénierie frontend au sein de leurs équipes produit.',
} as const;

export const SCREEN_READER_LINES: ScreenReaderLine[] = [
  { name: 'Aller au contenu principal', role: 'lien' },
  { name: 'Mettez vos applications en conformité', role: 'titre de niveau 1' },
  { name: 'Adresse e-mail, obligatoire', role: 'zone de texte modifiable' },
  { name: 'Me contacter par e-mail', role: 'bouton' },
];

export const PROBLEM = {
  title: 'Pourquoi agir maintenant',
  lead: 'L’accessibilité est devenue une obligation légale, et chaque parcours bloqué est un client perdu.',
  challenges: [
    {
      title: 'Le risque légal',
      description:
        'Depuis le 28 juin 2025, l’accessibilité est obligatoire pour l’e-commerce, la banque, le transport et les services numériques. Les mises en demeure et les premiers procès ont déjà eu lieu.',
    },
    {
      title: 'Des clients qui ne vont pas au bout',
      description:
        'Un bouton inatteignable au clavier, un formulaire muet au lecteur d’écran, et c’est une inscription ou une commande qui n’aboutit pas. Ces utilisateurs ne vous le signalent pas : ils partent.',
    },
    {
      title: 'Un audit ne corrige rien',
      description:
        'Beaucoup d’équipes ont déjà un rapport d’audit. Ce qui manque, c’est quelqu’un pour corriger le code sans bloquer la roadmap.',
    },
  ] satisfies Challenge[],
} as const;

export const SOLUTION = {
  title: 'Comment j’interviens',
  lead: 'Je transforme les non-conformités en code corrigé, dans votre stack et au rythme de vos sprints. Les outils automatiques pour aller vite, les tests manuels pour aller juste.',
  tools: [
    { name: 'axe-core', usage: 'détection automatique, intégrable à votre CI' },
    { name: 'Lighthouse', usage: 'contrôle rapide page par page' },
    { name: 'VoiceOver et NVDA', usage: 'tests réels au lecteur d’écran' },
    { name: 'RGAA 4.1.2 et WCAG 2.2 AA', usage: 'la grille de référence, critère par critère' },
  ] satisfies Tool[],
} as const;

export const LAW = {
  title: 'Ce que dit la loi',
  disclaimer: 'Informations générales, elles ne constituent pas un conseil juridique.',
  milestones: [
    {
      dateTime: '2023-09-06',
      dateLabel: 'Septembre 2023',
      description:
        'Ordonnance n° 2023-859 : jusqu’à 50 000 € par service non conforme pour les organismes soumis à l’article 47 de la loi de 2005, renouvelable tous les six mois.',
    },
    {
      dateTime: '2025-06-28',
      dateLabel: '28 juin 2025',
      description:
        'L’European Accessibility Act (directive 2019/882, loi n° 2023-171, décret n° 2023-931) s’applique au secteur privé.',
    },
    {
      dateTime: '2025-11',
      dateLabel: 'Novembre 2025',
      description:
        'Premières actions en justice d’associations contre des enseignes de la grande distribution.',
    },
  ] satisfies LawMilestone[],
} as const;

export const SERVICES = {
  title: 'Trois façons de travailler ensemble',
  items: [
    {
      title: 'Audit flash et diagnostic technique',
      description:
        'Vos parcours clés passés au crible : clavier, lecteur d’écran, contrastes, formulaires. Chaque non-conformité est identifiée et priorisée selon son impact utilisateur.',
      deliverable: 'Un rapport priorisé, prêt à entrer dans votre backlog.',
    },
    {
      title: 'Remédiation directe du code',
      description:
        'Je corrige dans votre base React, TypeScript et Next.js : sémantique, gestion du focus, ARIA, composants sur mesure. En pull requests, revues par votre équipe.',
      deliverable: 'Des PR atomiques, testées au clavier et au lecteur d’écran.',
    },
    {
      title: 'Accompagnement Design System',
      description:
        'Revue de vos composants et de vos tokens avec les équipes Produit et Design, pour que chaque nouvel écran soit accessible dès sa conception.',
      deliverable: 'Des composants de base corrigés et des règles d’usage documentées.',
    },
  ] satisfies Service[],
} as const;

export const ABOUT = {
  title: 'Qui suis-je',
  intro: 'Je suis Sacha, ingénieur frontend React basé à Paris.',
  // Replace with /photo-sacha.jpg (or .webp) once the file is in /public.
  photoSrc: '/logos/sacharequiem.jpg',
  photoAlt: 'Portrait de Sacha',
  paragraphs: [
    'Formé à l’École 42, je construis des interfaces React depuis plus de 6 ans. J’ai travaillé pour des entreprises comme Deezer, Devialet, KissKissBankBank (LaBanquePostale) ou encore Ulule. J’ai conçu et maintenu des Design Systems, j’ai développé des interfaces complexes, avec un regard tourné sur l’expérience utilisateur, tout en garantissant leur performance et leur maintenabilité.',
    'Aujourd’hui, je me consacre à l’accessibilité. Je parle le langage de vos développeurs, je connais les contraintes d’une roadmap, et je corrige directement dans le code plutôt que d’ajouter un rapport de plus.',
  ],
  proof: {
    prefix: 'Je l’applique d’abord à mes propres produits : ',
    linkLabel: 'yourgarden.app',
    href: 'https://www.yourgarden.app',
    suffix: ', que j’ai audité et corrigé avec axe-core et VoiceOver.',
  },
} as const;

export const CONTACT = {
  title: 'Diagnostic express offert',
  lead: 'Envoyez-moi l’URL d’une page ou d’un parcours clé. Je vous renvoie les 5 points bloquants prioritaires dans une courte vidéo, sans engagement.',
  primaryCta: 'Demander mon diagnostic express',
  secondaryCta: 'Me contacter par e-mail',
  emailPrefix: 'Ou écrivez moi directement sur',
  mailSubject: 'Diagnostic express',
  mailBody: 'Bonjour Sacha,\n\nVoici la page ou le parcours à diagnostiquer :\n\n\nMerci !',
} as const;

export const FOOTER = {
  statement:
    'Ce site est conçu pour le niveau WCAG 2.2 AA : navigation clavier complète, contrastes vérifiés, compatible lecteurs d’écran.',
} as const;

import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import '@fontsource-variable/instrument-sans';

import { SITE } from '@/lib/site';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name}, ${SITE.tagline} | Remédiation WCAG & RGAA pour React et Next.js`,
  description:
    'Mise en conformité WCAG et RGAA de vos applications React / Next.js : audit flash, remédiation directe du code, accompagnement Design System. Diagnostic express offert.',
  openGraph: {
    title: 'Remédiation WCAG & RGAA pour React et Next.js',
    description: 'Mettez vos applications en conformité, sans ralentir votre roadmap produit.',
    locale: 'fr_FR',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfbfd' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="fr">
    <body>
      <a className="skip-link" href="#contenu">
        Aller au contenu principal
      </a>
      {children}
    </body>
  </html>
);

export default RootLayout;

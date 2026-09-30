import { buildMailtoHref } from '@/lib/mailto';
import { SITE } from '@/lib/site';

import { CONTACT } from './content';

export const AUDIT_MAILTO_HREF = buildMailtoHref({
  to: SITE.email,
  subject: CONTACT.mailSubject,
  body: CONTACT.mailBody,
});

export const CALL_HREF = `mailto:${SITE.email}`;

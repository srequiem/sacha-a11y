type MailtoParams = {
  to: string;
  subject: string;
  body?: string;
};

export const buildMailtoHref = ({ to, subject, body }: MailtoParams): string => {
  const params = new URLSearchParams({ subject });
  if (body) params.set('body', body);

  // URLSearchParams encodes spaces as "+", which mail clients render literally.
  return `mailto:${to}?${params.toString().replace(/\+/g, '%20')}`;
};

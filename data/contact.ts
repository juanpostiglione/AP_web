// EmailJS public identifiers; change these when the contact form account changes.
// These values are visible in browser code. Never put an EmailJS private key here.
export const emailJs = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '-DQNgPdDH-K22v2O7',
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_nvthdlk',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_m44drxx',
};

export const contactEmails = [
  'contacto@apasociados.com',
];

'use client';

import { useEffect, useState } from 'react';
import { emailJs } from '../../data/contact';

interface EmailJsClient {
  init(key: string): void;
  sendForm(serviceId: string, templateId: string, form: HTMLFormElement): Promise<unknown>;
}

declare global {
  interface Window { emailjs?: EmailJsClient }
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    // The browser library is only needed on /contacto. Leave the loaded script
    // in place so revisiting the page does not request it again.
    if (window.emailjs || document.getElementById('emailjs-sdk')) return;
    const script = document.createElement('script');
    script.id = 'emailjs-sdk';
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.onload = () => window.emailjs?.init(emailJs.publicKey);
    script.onerror = () => script.remove();
    document.head.appendChild(script);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');
    try {
      if (!window.emailjs) throw new Error('EmailJS did not load');
      await window.emailjs.sendForm(emailJs.serviceId, emailJs.templateId, form);
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Envíanos un mensaje</h3>
      <p className="contact-form__subtitle">Completa el formulario y te responderemos a la brevedad.</p>
      <div className="form-row">
        <div className="form-group"><label htmlFor="nombre">Nombre y apellido</label><input type="text" id="nombre" name="from_name" placeholder="Nombre y apellido" required /></div>
        <div className="form-group"><label htmlFor="correo">Correo electrónico</label><input type="email" id="correo" name="from_email" placeholder="nombre@correo.com" required /></div>
      </div>
      <div className="form-group"><label htmlFor="mensaje">Mensaje</label><textarea id="mensaje" name="message" rows={6} placeholder="Cuéntanos sobre tu necesidad" required /></div>
      <button type="submit" className="cta-button" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}</button>
      <p className={`form-note ${status === 'success' ? 'form-note--success' : status === 'error' ? 'form-note--error' : ''}`} role="status">
        {status === 'success' ? 'Mensaje enviado correctamente. Te responderemos a la brevedad.' : status === 'error' ? 'Ocurrió un error al enviar. Por favor intenta de nuevo.' : 'Tu mensaje será enviado directamente a nuestro equipo.'}
      </p>
    </form>
  );
}

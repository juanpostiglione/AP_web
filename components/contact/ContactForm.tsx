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
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'unavailable'>('idle');
  const [sdkReady, setSdkReady] = useState(false);

  useEffect(() => {
    // The browser library is only needed on /contacto. Leave the loaded script
    // in place so revisiting the page does not request it again.
    const markReady = () => {
      if (!window.emailjs) return;
      window.emailjs.init(emailJs.publicKey);
      setSdkReady(true);
    };
    const markUnavailable = () => setStatus('unavailable');

    if (window.emailjs) {
      markReady();
      return;
    }

    let script = document.getElementById('emailjs-sdk') as HTMLScriptElement | null;
    const isNewScript = !script;
    if (!script) {
      script = document.createElement('script');
      script.id = 'emailjs-sdk';
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
      script.async = true;
    }
    script.addEventListener('load', markReady);
    script.addEventListener('error', markUnavailable);
    if (isNewScript) document.head.appendChild(script);
    return () => {
      script?.removeEventListener('load', markReady);
      script?.removeEventListener('error', markUnavailable);
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const honeypot = form.elements.namedItem('website') as HTMLInputElement | null;
    if (honeypot?.value) {
      setStatus('success');
      return;
    }
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
    <form className="contact-form" onSubmit={handleSubmit} aria-busy={status === 'sending'}>
      <div className="contact-form__heading">
        <span>Formulario de solicitud</span>
        <h2>Cuéntanos el alcance de tu requerimiento.</h2>
        <p className="contact-form__subtitle">Completa los datos principales para que podamos identificar el área adecuada de atención.</p>
      </div>
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="website">Sitio web</label><input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="contact-form__grid">
        <div className="form-group"><label htmlFor="nombre">Nombre y apellido</label><input type="text" id="nombre" name="from_name" placeholder="Nombre y apellido" autoComplete="name" maxLength={100} required /></div>
        <div className="form-group"><label htmlFor="empresa">Empresa</label><input type="text" id="empresa" name="company" placeholder="Nombre de la empresa" autoComplete="organization" maxLength={120} /></div>
        <div className="form-group"><label htmlFor="correo">Correo electrónico</label><input type="email" id="correo" name="from_email" placeholder="nombre@empresa.com" autoComplete="email" maxLength={160} required /></div>
        <div className="form-group"><label htmlFor="telefono">Teléfono</label><input type="tel" id="telefono" name="phone" placeholder="+58 000 000 0000" autoComplete="tel" maxLength={40} /></div>
        <div className="form-group contact-form__full">
          <label htmlFor="servicio">Área de interés</label>
          <select id="servicio" name="service" defaultValue="" required>
            <option value="" disabled>Selecciona una opción</option>
            <option value="Estructuras metálicas">Estructuras metálicas</option>
            <option value="Tanques y recipientes">Tanques y recipientes</option>
            <option value="Montaje industrial">Montaje industrial</option>
            <option value="Mantenimiento industrial">Mantenimiento industrial</option>
            <option value="Representaciones">Representaciones y productos</option>
            <option value="Otro">Otro requerimiento</option>
          </select>
        </div>
        <div className="form-group contact-form__full"><label htmlFor="mensaje">Mensaje</label><textarea id="mensaje" name="message" rows={6} placeholder="Describe brevemente el equipo, servicio o necesidad" maxLength={2500} required /></div>
      </div>
      <label className="form-consent" htmlFor="consentimiento">
        <input type="checkbox" id="consentimiento" name="consent" required />
        <span>Acepto que A.P. Asociados utilice estos datos únicamente para responder a mi solicitud.</span>
      </label>
      <button type="submit" className="cta-button" disabled={!sdkReady || status === 'sending'}>{status === 'sending' ? 'Enviando…' : 'Enviar requerimiento'}</button>
      <p className={`form-note ${status === 'success' ? 'form-note--success' : status === 'error' || status === 'unavailable' ? 'form-note--error' : ''}`} role="status" aria-live="polite">
        {status === 'success' ? 'Mensaje enviado correctamente. Te responderemos a la brevedad.'
          : status === 'error' ? 'No pudimos enviar el mensaje. Intenta nuevamente o escríbenos por correo.'
            : status === 'unavailable' ? 'El formulario no está disponible en este momento. Escríbenos directamente por correo.'
              : !sdkReady ? 'Preparando el formulario seguro…' : 'Tus datos se usarán únicamente para responder a esta solicitud.'}
      </p>
    </form>
  );
}

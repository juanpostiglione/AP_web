'use client';

import { useEffect, useState } from 'react';
import { Metadata } from 'next';

export default function Contacto() {
  const [formState, setFormState] = useState({ loading: false, success: false, error: false });

  useEffect(() => {
    // Load EmailJS
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.onload = () => {
      (window as any).emailjs.init('-DQNgPdDH-K22v2O7');
    };
    document.head.appendChild(script);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ loading: true, success: false, error: false });

    try {
      await (window as any).emailjs.sendForm('service_nvthdlk', 'template_m44drxx', e.currentTarget);
      setFormState({ loading: false, success: true, error: false });
      (e.currentTarget as HTMLFormElement).reset();
      setTimeout(() => setFormState({ loading: false, success: false, error: false }), 5000);
    } catch (error) {
      setFormState({ loading: false, success: false, error: true });
      setTimeout(() => setFormState({ loading: false, success: false, error: false }), 5000);
    }
  };

  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero__inner">
          <span className="section-kicker">Contacto</span>
          <h1 className="contact-hero__title">Contáctanos</h1>
          <div className="header-line"></div>
          <p className="contact-lead">Comparte tus requerimientos y nuestro equipo se pondrá en contacto para coordinar la mejor solución.</p>
        </div>
      </section>
      <section className="contact-content">
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-card__icon">⌖</div>
            <h3>Ubicación</h3>
            <p>
              Puerto Ordaz, Estado Bolívar
              <br />
              Venezuela
            </p>
          </div>
          <div className="contact-card">
            <div className="contact-card__icon">◷</div>
            <h3>Horario</h3>
            <p>
              Lunes a Viernes
              <br />
              8:00 AM - 5:00 PM
            </p>
          </div>
          <div className="contact-card">
            <div className="contact-card__icon">✉</div>
            <h3>Correo</h3>
            <p>
              <a href="mailto:salatecnica@apasociados.com" className="contact-card__link">
                salatecnica@apasociados.com
              </a>
              <br />
              <a href="mailto:jhpostiglione@apasociados.com" className="contact-card__link">
                jhpostiglione@apasociados.com
              </a>
              <br />
              <a href="mailto:gtegeneral@apasociados.com" className="contact-card__link">
                gtegeneral@apasociados.com
              </a>
            </p>
          </div>
        </div>
        <div className="contact-services">
          <h3>¿Qué podemos hacer por ti?</h3>
          <div className="contact-services__grid">
            <div className="contact-services__item">
              <span className="contact-services__accent"></span>
              <span>Diseño y fabricación de estructuras</span>
            </div>
            <div className="contact-services__item">
              <span className="contact-services__accent"></span>
              <span>Mantenimiento industrial y reparaciones</span>
            </div>
            <div className="contact-services__item">
              <span className="contact-services__accent"></span>
              <span>Representaciones y suministros</span>
            </div>
            <div className="contact-services__item">
              <span className="contact-services__accent"></span>
              <span>Soporte técnico y asesoría</span>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Envíanos un mensaje</h3>
          <p className="contact-form__subtitle">Completa el formulario y te responderemos a la brevedad.</p>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombre">Nombre y apellido</label>
              <input type="text" id="nombre" name="from_name" placeholder="Tu nombre" required />
            </div>
            <div className="form-group">
              <label htmlFor="correo">Correo electrónico</label>
              <input type="email" id="correo" name="from_email" placeholder="tu@correo.com" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="message" rows={6} placeholder="Cuéntanos sobre tu necesidad" required></textarea>
          </div>
          <button type="submit" className="cta-button" disabled={formState.loading}>
            {formState.loading ? 'Enviando...' : 'Enviar mensaje'}
          </button>
          <p className={`form-note ${formState.success ? 'form-note--success' : formState.error ? 'form-note--error' : ''}`}>
            {formState.success && 'Mensaje enviado correctamente. Te responderemos a la brevedad.'}
            {formState.error && 'Ocurrió un error al enviar. Por favor intenta de nuevo.'}
            {!formState.success && !formState.error && 'Tu mensaje será enviado directamente a nuestro equipo.'}
          </p>
        </form>
      </section>
    </>
  );
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nosotros | A.P ASOCIADOS C.A',
  description: 'Conoce la trayectoria y capacidad de A.P Asociados desde 1982.',
};

const storyPanels = [
  {
    image: 'ap_new_02.jpeg',
    alt: 'Instalaciones A.P ASOCIADOS C.A',
    kicker: 'Trayectoria',
    title: 'Calidad y productividad desde 1982',
    text: 'Con una trayectoria de calidad y productividad desde el año 1982, fecha de su puesta en marcha; cuenta con el apoyo de su personal obrero, técnico y profesional especializado.',
  },
  {
    image: 'ap_new_03.jpeg',
    alt: 'Producción metalmecánica',
    kicker: 'Calidad',
    title: 'Procesos certificados ISO 9001',
    text: 'Los procedimientos aplicados a procesos de fabricación, montaje, selección y manejo de materiales, normas de seguridad y cuidado ambiental se rigen bajo los parámetros de calidad ISO 9001.',
  },
];

export default function Nosotros() {
  return (
    <>
      <section className="nosotros-hero">
        <div className="nosotros-hero__content">
          <span className="nosotros-hero__kicker">Desde 1982</span>
          <h1 className="nosotros-hero__title">Capacidad y Trayectoria</h1>
          <p className="nosotros-hero__subtitle">Más de 40 años construyendo eficiencia y seguridad en la industria venezolana</p>
        </div>
      </section>

      <section className="story story--page">
        <div className="story-panels">
          {storyPanels.map((panel, idx) => (
            <article key={idx} className="story-panel">
              <div className="story-panel-media">
                <img src={`/images/${panel.image}`} alt={panel.alt} />
              </div>
              <div className="story-panel-content">
                <span className="step-kicker">{panel.kicker}</span>
                <h3>{panel.title}</h3>
                <p>{panel.text}</p>
              </div>
            </article>
          ))}
          <article className="story-panel">
            <div className="story-panel-media">
              <img src="/images/ap_new_04.jpeg" alt="Capacidad de proyectos" />
            </div>
            <div className="story-panel-content">
              <span className="step-kicker">Infraestructura</span>
              <h3>Área total y capacidad instalada</h3>
              <ul className="story-area-list">
                <li>
                  <span>Superficie Total:</span> 28.500 m2
                </li>
                <li>
                  <span>Talleres:</span> 5.500 m2
                </li>
                <li>
                  <span>Almacenes:</span> 1.300 m2
                </li>
                <li>
                  <span>Oficinas:</span> 265 m2
                </li>
              </ul>
            </div>
          </article>
          <article className="story-panel">
            <div className="story-panel-media">
              <img src="/images/ap_new_05.jpeg" alt="Equipo humano especializado" />
            </div>
            <div className="story-panel-content">
              <span className="step-kicker">Especialidades</span>
              <h3>Construcciones metalmecánicas</h3>
              <p>Empresa especializada en construcciones metalmecánicas con una larga trayectoria en fabricación y montaje de:</p>
              <ul className="story-list">
                <li>Estructuras metálicas</li>
                <li>Recipientes a presión</li>
                <li>Tuberías de alta y baja presión</li>
                <li>Ductería</li>
                <li>Paneles refrigerados</li>
                <li>Múltiples petroleros</li>
                <li>Tanques de almacenamiento</li>
                <li>Puentes viaductos de acero</li>
                <li>Edificaciones - Plantas industriales</li>
                <li>Mecanizado de piezas mecánicas</li>
                <li>Mantenimiento de plantas industriales</li>
                <li>Reparación de conjuntos mecánicos</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="nosotros-gallery">
        <div className="nosotros-gallery__inner">
          <h2 className="nosotros-gallery__title">Nuestros Proyectos</h2>
          <div className="nosotros-gallery__grid">
            <img src="/images/ap_new_06.jpeg" alt="Instalaciones A.P ASOCIADOS C.A" />
            <img src="/images/ap_new_07.jpeg" alt="Planta industrial A.P ASOCIADOS C.A" />
            <img src="/images/ap_new_08.jpeg" alt="Operaciones A.P ASOCIADOS C.A" />
            <img src="/images/ap_005.jpg" alt="Instalaciones A.P ASOCIADOS C.A" />
            <img src="/images/ap_038.jpg" alt="Equipo A.P ASOCIADOS C.A" />
            <img src="/images/ap_048.jpg" alt="Personal especializado" />
          </div>
        </div>
      </section>
    </>
  );
}

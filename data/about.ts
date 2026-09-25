import { metalworkingSpecialties } from './services';

// Copy and image order for /nosotros. Source photos live in public/images.
export const storyPanels = [
  {
    image: '/images/ap_new_02.jpeg', alt: 'Instalaciones A.P ASOCIADOS C.A',
    kicker: 'Trayectoria', title: 'Calidad y productividad desde 1982',
    paragraphs: ['Con una trayectoria de calidad y productividad desde el año 1982, fecha de su puesta en marcha; cuenta con el apoyo de su personal obrero, técnico y profesional especializado.'],
  },
  {
    image: '/images/ap_new_03.jpeg', alt: 'Producción metalmecánica',
    kicker: 'Calidad', title: 'Procesos certificados ISO 9001',
    paragraphs: ['Los procedimientos aplicados a procesos de fabricación, montaje, selección y manejo de materiales, normas de seguridad y cuidado ambiental se rigen bajo los parámetros de calidad ISO 9001.'],
  },
  {
    image: '/images/ap_new_04.jpeg', alt: 'Capacidad de proyectos',
    kicker: 'Infraestructura', title: 'Área total y capacidad instalada',
    areas: [
      ['Superficie Total:', '28.500 m2'], ['Talleres:', '5.500 m2'],
      ['Almacenes:', '1.300 m2'], ['Oficinas:', '265 m2'],
    ],
  },
  {
    image: '/images/ap_new_05.jpeg', alt: 'Equipo humano especializado',
    kicker: 'Especialidades', title: 'Construcciones metalmecánicas',
    paragraphs: ['Empresa especializada en construcciones metalmecánicas con una larga trayectoria en fabricación y montaje de:'],
    specialties: metalworkingSpecialties,
  },
];

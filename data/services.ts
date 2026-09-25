// Five visual chapters for /servicios. Change image paths in public/images/.
// The first four titles mirror the brochure headings; the fifth highlights
// the petroleum sector and specialties named in the supplied brochures.
type ServiceArea = {
  section: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  capabilities: string[];
  documentedExample?: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    section: 'Estructura Metálica · Tanques y Recipientes',
    title: 'Estructura Metálica',
    image: '/images/ap_048.jpg',
    alt: 'Estructura de acero con columnas y cerchas en construcción',
    description: 'Fabricación de estructuras de acero para edificaciones y plantas industriales, puentes, viaductos, plataformas y sistemas de transporte de materiales.',
    capabilities: ['Estructuras para torres, plataformas y escaleras', 'Edificaciones y plantas industriales', 'Puentes y viaductos de acero', 'Galerías y bastidores para cintas transportadoras'],
  },
  {
    section: 'Estructura Metálica · Tanques y Recipientes',
    title: 'Tanques y Recipientes',
    image: '/images/ap_new_05.jpeg',
    alt: 'Fabricación de un recipiente metálico de gran tamaño dentro de un taller',
    description: 'Fabricación metalmecánica de recipientes a presión, tanques de almacenamiento, ductería, tuberías y otros componentes para procesos industriales.',
    capabilities: ['Tanques de almacenamiento y recipientes a presión', 'Tuberías de alta y baja presión y múltiples petroleros', 'Ductería, ductos y paneles refrigerados', 'Mecanizado de piezas mecánicas'],
  },
  {
    section: 'Montaje · Mantenimiento',
    title: 'Montaje',
    image: '/images/ap_new_03.jpeg',
    alt: 'Grúas industriales situadas frente a una nave de trabajo',
    description: 'Montaje de estructuras, instalaciones de tuberías y componentes metalmecánicos en obras e instalaciones industriales.',
    capabilities: ['Montaje de estructuras y edificaciones industriales', 'Instalación de tuberías de reinyección de aire y gas', 'Montaje de equipos y componentes de proceso'],
  },
  {
    section: 'Montaje · Mantenimiento',
    title: 'Mantenimiento',
    image: '/images/ap_new_02.jpeg',
    alt: 'Grúa trasladando un componente metálico usado en una instalación industrial',
    description: 'Mantenimiento de plantas industriales, reparación de conjuntos mecánicos y reconstrucción de equipos y estructuras.',
    capabilities: ['Mantenimiento de plantas industriales', 'Reparación de conjuntos mecánicos', 'Reconstrucción de equipos industriales', 'Reacondicionamiento estructural y de revestimientos de acero'],
  },
  {
    section: 'Sectores industriales',
    title: 'Sector Petrolero',
    image: '/images/ap_new_08.jpeg',
    alt: 'Tanque cilíndrico de color naranja en una instalación industrial',
    description: 'El sector petrolero forma parte de la experiencia metalmecánica de A.P. Asociados. Sus especialidades incluyen componentes para tuberías, almacenamiento y procesos industriales.',
    capabilities: ['Múltiples petroleros', 'Tuberías de alta y baja presión', 'Tanques de almacenamiento', 'Recipientes a presión', 'Tuberías de reinyección de aire y gas'],
    // Historical brochure example; the photograph is not attributed to this job.
    documentedExample: 'Fabricación e instalación de tubería de reinyección de aire, gas de combustión y gas de tope para reformadores de gas. Planta OPCO.',
  },
];

// All 16 items under the brochure heading “Estructura Metálica / Tanques y
// Recipientes” and all 8 under “Montaje / Mantenimiento”, in printed order.
// Each item is shown as its own visible bullet. These are historical examples;
// no photo is asserted to depict one of the named clients or projects.
export const documentedWork = [
  {
    title: 'Estructura Metálica',
    subtitle: 'Tanques y Recipientes',
    items: [
      'Camisa de encofrado para pilotes del Segundo Puente sobre el río Orinoco.',
      'Fabricación de tapas metálicas. SIDOR.',
      'Fabricación de codo gigante. SIDOR.',
      'Fabricación de ductos recolectores de humo. SIDOR.',
      'Fabricación de ventiladores.',
      'Fabricación de ductos refrigerados, anillo separador y tornillo hexagonal. SIDOR.',
      'Fabricación de tubería de reinyección de aire, gas de combustión y gas de tope para reformadores de OPCO.',
      'Fabricación de distribuidor de mezcla para planta de carbón. ALCASA.',
      'Fabricación de cesta portachatarra. SIDOR.',
      'Fabricación de baldes de recuperador Dravo. FERROMINERA ORINOCO.',
      'Fabricación de recipiente de presión. BAUXILUM.',
      'Fabricación de jaibas. SIDOR.',
      'Reacondicionamiento estructural y reemplazo de revestimiento de acero en áreas de P.M.H. FERROMINERA ORINOCO.',
      'Fabricación de estructuras metálicas para torres, plataformas y escaleras. COMSIGUA.',
      'Fabricación de galerías para cintas transportadoras, bajantes de chutes con planchas de impacto y torres de transferencia. VENCEMOS BASAURI.',
      'Fabricación de bastidores para cintas transportadoras.',
    ],
  },
  {
    title: 'Montaje',
    subtitle: 'Mantenimiento',
    items: [
      'Ducto refrigerado para extracción de humo.',
      'Fabricación y montaje de Edificio Administrativo I. SIDOR.',
      'Fabricación e instalación de tubería de reinyección de aire, gas de combustión y gas de tope para reformadores de gas. Planta OPCO.',
      'Fabricación y montaje de estructura. VOEST ALPINE.',
      'Fabricación y montaje de conos de cernidora en planta de procesamiento de mineral de hierro. FERROMINERA ORINOCO.',
      'Reconstrucción de gancho de grúa. SIDOR.',
      'Reconstrucción de carro porta acero líquido. SIDOR.',
      'Reconstrucción de cucharón. SIDOR.',
    ],
  },
];

// The other brochure also lists these specialties, sectors and capacity.
// Capacity figures are labeled as brochure figures on the site because the
// supplied material does not establish whether they are current.
export const serviceProfile = {
  introduction: 'A.P. Asociados es una empresa especializada en construcciones metalmecánicas, con una larga trayectoria en fabricación y montaje.',
  trajectory: 'Con una trayectoria de calidad y productividad desde el año 1982, fecha de su puesta en marcha, cuenta con el apoyo de su personal obrero, técnico y profesional especializado.',
  quality: 'Los procedimientos aplicados a procesos de fabricación, montaje, selección y manejo de materiales, normas de seguridad y cuidado ambiental se rigen bajo los parámetros de calidad ISO 9001.',
  capacity: [
    { label: 'Estructura metálica pesada', value: '550 T/mes' },
    { label: 'Estructura metálica liviana', value: '350 T/mes' },
  ],
  areas: [
    { label: 'Superficie total', value: '28.500 m²' },
    { label: 'Talleres', value: '5.500 m²' },
    { label: 'Almacenes', value: '1.300 m²' },
    { label: 'Oficinas', value: '265 m²' },
  ],
  sectors: ['Aluminio', 'Petrolero', 'Siderúrgico', 'Hidroeléctrico'],
};

export const brochureSpecialties = [
  'Ductería', 'Tuberías de alta y baja presión', 'Reconstrucción de equipos industriales',
  'Paneles refrigerados', 'Tanques de almacenamiento', 'Múltiples petroleros',
  'Edificaciones y plantas industriales', 'Puentes y viaductos de acero',
  'Mecanizado de piezas mecánicas', 'Reparación de conjuntos mecánicos',
  'Mantenimiento de plantas industriales', 'Estructuras metálicas', 'Recipientes a presión',
];

// One source for the specialties listed in Nosotros; keep historical terms intact.
export const metalworkingSpecialties = [
  'Estructuras metálicas', 'Recipientes a presión', 'Tuberías de alta y baja presión',
  'Ductería', 'Paneles refrigerados', 'Múltiples petroleros', 'Tanques de almacenamiento',
  'Puentes viaductos de acero', 'Edificaciones - Plantas industriales',
  'Mecanizado de piezas mecánicas', 'Mantenimiento de plantas industriales',
  'Reparación de conjuntos mecánicos',
];

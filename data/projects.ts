export type ProjectImage = {
  src: string;
  alt: string;
  label?: 'Antes' | 'Después';
};

export type Project = {
  images: ProjectImage[];
  category: string;
  title: string;
  client?: string;
  paragraphs: string[];
};

// Portafolio organizado a partir de las fotografías y descripciones entregadas
// por A.P Asociados. Las imágenes viven en public/images/projects/.
export const projects: Project[] = [
  {
    images: [
      {
        src: '/images/projects/muelle-venalum.webp',
        alt: 'Fabricación de componentes tubulares durante el montaje del muelle de VENALUM',
      },
    ],
    category: 'Infraestructura industrial',
    title: 'Fabricación y montaje del muelle de VENALUM',
    client: 'VENALUM',
    paragraphs: [
      'Fabricación y montaje de componentes metálicos de gran escala para la infraestructura del muelle de VENALUM.',
      'La imagen documenta el trabajo en campo, la preparación de elementos tubulares y la coordinación de equipos de izaje junto a la estructura existente.',
    ],
  },
  {
    images: [
      {
        src: '/images/projects/criba-antes.webp',
        alt: 'Criba industrial antes de los trabajos de recuperación',
        label: 'Antes',
      },
      {
        src: '/images/projects/criba-despues.webp',
        alt: 'Criba industrial recuperada sobre una nueva estructura metálica',
        label: 'Después',
      },
    ],
    category: 'Recuperación de equipos',
    title: 'Recuperación integral de criba industrial',
    paragraphs: [
      'El registro antes y después muestra la transformación del equipo, desde su condición de ingreso hasta su presentación final sobre una estructura metálica renovada.',
      'Un ejemplo del trabajo de recuperación y adecuación de equipos industriales realizado en nuestros talleres.',
    ],
  },
  {
    images: [
      {
        src: '/images/projects/galpones-alcasa.webp',
        alt: 'Montaje de columnas y vigas para un galpón industrial de ALCASA',
      },
    ],
    category: 'Estructuras metálicas',
    title: 'Fabricación y montaje de galpones en ALCASA',
    client: 'ALCASA',
    paragraphs: [
      'Fabricación y montaje de la estructura principal de galpones industriales para ALCASA.',
      'La fotografía recoge la instalación de columnas y vigas con apoyo de grúas durante una de las etapas del montaje.',
    ],
  },
  {
    images: [
      {
        src: '/images/projects/ductos-refrigerados-sidor.webp',
        alt: 'Trabajadores fabricando un conjunto de ductos refrigerados para la acería de planchones de SIDOR',
      },
    ],
    category: 'Siderurgia',
    title: 'Ductos refrigerados para la acería de planchones de SIDOR',
    client: 'SIDOR',
    paragraphs: [
      'Fabricación de ductos refrigerados destinados a la acería de planchones de SIDOR.',
      'El conjunto evidencia la precisión requerida para conformar, ensamblar y soldar la red tubular alrededor del cuerpo principal.',
    ],
  },
  {
    images: [
      {
        src: '/images/projects/valvula-multipuerto-alcasa.webp',
        alt: 'Cuerpo de válvula multipuerto fabricado para la planta de carbón de ALCASA',
      },
    ],
    category: 'Equipos especiales',
    title: 'Válvula multipuerto para la planta de carbón de ALCASA',
    client: 'ALCASA',
    paragraphs: [
      'Fabricación de una válvula multipuerto para la planta de carbón de ALCASA.',
      'El equipo integra conexiones de distintos diámetros y superficies preparadas para su posterior ensamblaje en planta.',
    ],
  },
  {
    images: [
      {
        src: '/images/projects/recipientes-presion.webp',
        alt: 'Dos recipientes a presión terminados dentro del taller de A.P Asociados',
      },
    ],
    category: 'Tanques y recipientes',
    title: 'Fabricación de recipientes a presión',
    paragraphs: [
      'Fabricación en taller de recipientes verticales y horizontales con sus soportes, conexiones y accesos correspondientes.',
      'La imagen permite apreciar las proporciones de los equipos y el acabado de sus superficies antes de la entrega.',
    ],
  },
  {
    images: [
      {
        src: '/images/projects/tanque-fmo-diesel.webp',
        alt: 'Tanque horizontal para transporte de diésel de Ferrominera Orinoco',
      },
    ],
    category: 'Tanques y recipientes',
    title: 'Tanque de diésel para Ferrominera Orinoco',
    client: 'FMO',
    paragraphs: [
      'Tanque horizontal para diésel destinado a Ferrominera Orinoco, equipado con escalera, pasarela superior y elementos de seguridad.',
      'Este registro forma parte del archivo histórico de soluciones fabricadas por A.P Asociados para la industria básica venezolana.',
    ],
  },
  {
    images: [
      {
        src: '/images/projects/trabajo-ducteria.webp',
        alt: 'Fabricación de tramos de ductería en las instalaciones de A.P Asociados',
      },
    ],
    category: 'Ductería industrial',
    title: 'Trabajo de ductería industrial',
    paragraphs: [
      'Preparación y fabricación de tramos de ductería en las instalaciones de A.P Asociados.',
      'El área de trabajo reúne equipos de izaje, tubería y componentes en distintas etapas del proceso productivo.',
    ],
  },
  {
    images: [
      {
        src: '/images/projects/ducteria-talleres.webp',
        alt: 'Tramos de ductería en fabricación frente a los talleres de A.P Asociados',
      },
    ],
    category: 'Fabricación en taller',
    title: 'Fabricación de ductería en nuestros talleres',
    paragraphs: [
      'Fabricación de ductos y componentes tubulares de diferentes diámetros dentro de nuestras áreas productivas.',
      'La vista general muestra la capacidad del taller para manejar simultáneamente piezas, equipos de transporte e izaje.',
    ],
  },
];

export const homeProjectPreview = {
  image: '/images/projects/home-taller-fabricacion.webp',
  alt: 'Operario trabajando una pieza metálica en el taller de A.P Asociados',
  category: 'Capacidad productiva',
  title: 'Fabricación industrial desde nuestros talleres',
};

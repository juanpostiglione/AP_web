import { metalworkingSpecialties } from './services';

export const companyOverview = {
  title: 'Experiencia metalmecánica al servicio de la industria venezolana',
  paragraphs: [
    'A.P. Asociados C.A. es una empresa venezolana especializada en construcciones metalmecánicas. Desde su puesta en marcha en 1982, desarrolla soluciones de fabricación, montaje y mantenimiento para operaciones industriales.',
    'Su capacidad reúne personal obrero, técnico y profesional especializado, junto con infraestructura propia para atender estructuras metálicas, tanques, recipientes, ductería, tuberías y recuperación de equipos.',
  ],
};

export const companyFacts = [
  { value: '1982', label: 'Inicio de operaciones' },
  { value: '28.500\u00a0m²', label: 'Superficie total', compact: true },
  { value: '5.500\u00a0m²', label: 'Área de talleres', compact: true },
  { value: '04', label: 'Sectores industriales' },
];

export const companyChapters = [
  {
    number: '01',
    kicker: 'Trayectoria',
    title: 'Más de cuatro décadas construyendo capacidad industrial',
    paragraphs: [
      'La empresa inició operaciones en 1982 y ha desarrollado una trayectoria vinculada a la fabricación y el montaje para la industria venezolana.',
      'Cada proyecto combina experiencia de taller, coordinación en campo y conocimiento acumulado por su equipo técnico y profesional.',
    ],
  },
  {
    number: '02',
    kicker: 'Calidad',
    title: 'Procesos guiados por parámetros ISO 9001',
    paragraphs: [
      'Los procedimientos de fabricación, montaje, selección y manejo de materiales se desarrollan bajo parámetros de calidad ISO 9001, de acuerdo con la documentación corporativa.',
      'La seguridad industrial y el cuidado ambiental forman parte de la planificación y ejecución del trabajo.',
    ],
  },
  {
    number: '03',
    kicker: 'Infraestructura',
    title: 'Instalaciones para fabricar, almacenar y coordinar',
    paragraphs: [
      'La infraestructura documentada comprende 28.500 m² de superficie total, con 5.500 m² de talleres, 1.300 m² de almacenes y 265 m² de oficinas.',
      'Esta distribución integra producción, manejo de materiales y coordinación técnica en una misma operación.',
    ],
  },
  {
    number: '04',
    kicker: 'Especialidades',
    title: 'Soluciones metalmecánicas para distintos procesos',
    paragraphs: [
      'La experiencia de A.P. Asociados comprende las siguientes áreas de trabajo:',
    ],
    specialties: metalworkingSpecialties,
  },
];

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
};

export const founders: TeamMember[] = [
  { name: 'Humberto Simonpietri', role: 'Miembro fundador', initials: 'HS' },
  { name: 'Augusto Postiglione', role: 'Miembro fundador', initials: 'AP' },
  { name: 'Antonio Postiglione', role: 'Miembro fundador', initials: 'AP' },
];

export const currentBoard: TeamMember[] = [
  { name: 'Augusto Postiglione', role: 'Presidente', initials: 'AP' },
  { name: 'Juan Leonardo Postiglione', role: 'Primer Vicepresidente', initials: 'JLP' },
  { name: 'José Humberto Postiglione', role: 'Segundo Vicepresidente', initials: 'JHP' },
];

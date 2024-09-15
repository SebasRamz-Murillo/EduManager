import { GroupArray1, GroupArray2 } from "./Group";
type Subject = {
  id?: string;
  name: string;
  description: string;
  units: string[]; // Lista de unidades
  groups?: Group[]; // Lista de grupos
  created_at: Date;
  updated_at?: Date | null;
  deleted_at?: Date | null;
};
interface Group {
  students: any;
  id: string | null;
  number: string;
  letter: string;
  created_at: Date;
  updated_at: Date | null;
  deleted_at: Date | null;
}

// Primer arreglo de materias
const subjectsArray1: Subject[] = [
  {
    id: "1",
    name: "Matemáticas",
    description: "Estudio de los números, operaciones y ecuaciones.",
    units: ["Álgebra", "Geometría", "Trigonometría"],
    created_at: new Date(),
    groups: GroupArray1,
  },
  {
    id: "2",
    name: "Historia",
    description: "Estudio de los eventos históricos más importantes del mundo.",
    units: ["Historia Antigua", "Edad Media", "Historia Moderna"],
    created_at: new Date(),
    groups: GroupArray2,
  },
  {
    id: "3",
    name: "Biología",
    description: "Estudio de los seres vivos, su estructura y función.",
    units: ["Células", "Genética", "Ecología"],
    created_at: new Date(),
    groups: GroupArray1,
  },
  {
    id: "4",
    name: "Química",
    description: "Estudio de la materia y sus reacciones.",
    units: ["Elementos", "Compuestos", "Reacciones Químicas"],
    created_at: new Date(),
    groups: GroupArray2,
  },
  {
    id: "5",
    name: "Lengua y Literatura",
    description: "Estudio de la lengua y las obras literarias.",
    units: ["Gramática", "Literatura Clásica", "Literatura Contemporánea"],
    created_at: new Date(),
    groups: GroupArray1,
  },
];

// Segundo arreglo de materias
const subjectsArray2: Subject[] = [
  {
    id: "6",
    name: "Física",
    description: "Estudio de las leyes fundamentales del universo.",
    units: ["Mecánica", "Electricidad", "Óptica"],
    created_at: new Date(),
    groups: GroupArray1,
  },
  {
    id: "7",
    name: "Geografía",
    description: "Estudio de la Tierra y sus características físicas.",
    units: ["Geografía Física", "Geografía Humana", "Mapas"],
    created_at: new Date(),
    groups: GroupArray2,
  },
  {
    id: "8",
    name: "Educación Física",
    description: "Desarrollo físico y deportivo de los estudiantes.",
    units: ["Deportes", "Salud Física", "Nutrición"],
    created_at: new Date(),
    groups: GroupArray1,
  },
  {
    id: "9",
    name: "Arte",
    description: "Exploración de diversas formas de expresión artística.",
    units: ["Pintura", "Escultura", "Historia del Arte"],
    created_at: new Date(),
    groups: GroupArray2,
  },
  {
    id: "10",
    name: "Música",
    description: "Estudio de la música, su teoría y práctica.",
    units: ["Teoría Musical", "Instrumentos", "Composición"],
    created_at: new Date(),
    groups: GroupArray1,
  },
];

// Tercer arreglo de materias
const subjectsArray3: Subject[] = [
  {
    id: "11",
    name: "Tecnología",
    description: "Introducción a las herramientas tecnológicas y su uso.",
    units: ["Informática", "Robótica", "Programación"],
    created_at: new Date(),
    groups: GroupArray2,
  },
  {
    id: "12",
    name: "Economía",
    description: "Estudio de los sistemas económicos y financieros.",
    units: ["Microeconomía", "Macroeconomía", "Economía Internacional"],
    created_at: new Date(),
    groups: GroupArray2,
  },
  {
    id: "13",
    name: "Filosofía",
    description: "Exploración de las principales corrientes de pensamiento.",
    units: ["Ética", "Metafísica", "Lógica"],
    created_at: new Date(),
    groups: GroupArray2,
  },
  {
    id: "14",
    name: "Psicología",
    description: "Estudio del comportamiento humano y los procesos mentales.",
    units: ["Cognición", "Desarrollo Humano", "Psicología Social"],
    created_at: new Date(),
    groups: GroupArray2,
  },
  {
    id: "15",
    name: "Ciencias Políticas",
    description: "Estudio de los sistemas políticos y el poder.",
    units: [
      "Teorías Políticas",
      "Gobiernos y Democracias",
      "Relaciones Internacionales",
    ],
    created_at: new Date(),
    groups: GroupArray2,
  },
];

// Exportar los arreglos
export { subjectsArray1, subjectsArray2, subjectsArray3 };

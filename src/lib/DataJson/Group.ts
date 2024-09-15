// Definición del modelo Group en TypeScript
import { studentsArray1, studentsArray2, studentsArray3 } from "./Students";
type Student = {
  id?: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  age: string;
  email: string;
  telephone: string;
  created_at: Date;
  updated_at?: Date | null;
  deleted_at?: Date | null;
};
interface Group {
  id: string | null;
  number: string;
  letter: string;
  created_at: Date;
  students: Student[];
  updated_at: Date | null;
  deleted_at: Date | null;
}

// Crear un arreglo con 5 grupos
const GroupArray1: Group[] = [
  {
    id: "1",
    number: "1",
    letter: "A",
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
    students: studentsArray1,
  },
  {
    id: "2",
    number: "2",
    letter: "B",
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
    students: studentsArray2,
  },
  {
    id: "3",
    number: "3",
    letter: "C",
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
    students: studentsArray3,
  },
  {
    id: "4",
    number: "4",
    letter: "D",
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
    students: studentsArray1,
  },
  {
    id: "5",
    number: "5",
    letter: "E",
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
    students: studentsArray2,
  },
];

const GroupArray2: Group[] = [
  {
    id: "6",
    number: "6",
    letter: "F",
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
    students: studentsArray3,
  },
  {
    id: "7",
    number: "7",
    letter: "G",
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
    students: studentsArray2,
  },
  {
    id: "8",
    number: "8",
    letter: "H",
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
    students: studentsArray1,
  },
  {
    id: "9",
    number: "9",
    letter: "I",
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
    students: studentsArray3,
  },
  {
    id: "10",
    number: "10",
    letter: "J",
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
    students: studentsArray1,
  },
];

export { GroupArray1, GroupArray2 };

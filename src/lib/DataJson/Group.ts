// Definición del modelo Group en TypeScript
interface Group {
  id: string | null;
  number: string;
  letter: string;
  created_at: Date;
  updated_at: Date | null;
  deleted_at: Date | null;
}

// Crear un arreglo con 5 grupos
export const grupos: Group[] = [
  {
    id: "1",
    number: "1",
    letter: "A",
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
  },
  {
    id: "2",
    number: "2",
    letter: "B",
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
  },
  {
    id: "3",
    number: "3",
    letter: "C",
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
  },
  {
    id: "4",
    number: "4",
    letter: "D",
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
  },
  {
    id: "5",
    number: "5",
    letter: "E",
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
  },
];

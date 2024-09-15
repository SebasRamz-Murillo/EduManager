// Definición del modelo Period en TypeScript
interface Period {
  id: string | null;
  type: string;
  start_date: Date;
  end_date: Date;
  created_at: Date;
  updated_at: Date | null;
  deleted_at: Date | null;
}

// Crear un objeto de tipo Period con el valor 'semestre'
export const periodoSemestre: Period = {
  id: "1",
  type: "Semestre",
  start_date: new Date(2024, 0, 15), // Enero es el mes 0 en JavaScript
  end_date: new Date(2024, 5, 15), // Junio es el mes 5
  created_at: new Date(),
  updated_at: null,
  deleted_at: null,
};

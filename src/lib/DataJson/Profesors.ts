import { subjectsArray1, subjectsArray2, subjectsArray3 } from "./Subjects";
const ProfesorsArray1 = [
  {
    id: "1",
    first_name: "Juan",
    middle_name: "Carlos",
    last_name: "García",
    email: "jgarcia@school.com",
    password: "Aa_12345",
    telephone: "555-1234",
    role: "p", // Role de profesor
    disabled: false,
    created_at: new Date(),
    subjects: subjectsArray2,
    updated_at: null,
    deleted_at: null,
  },
  {
    id: "2",
    first_name: "María",
    middle_name: "Luisa",
    last_name: "Fernández",
    email: "mfernandez@school.com",
    password: "hashedPassword2",
    telephone: "555-5678",
    role: "p", // Role de profesor
    disabled: false,
    created_at: new Date(),
    subjects: subjectsArray2,
    updated_at: null,
    deleted_at: null,
  },
];

const ProfesorsArray2 = [
  {
    id: "3",
    first_name: "Pedro",
    middle_name: "Alonso",
    last_name: "Martínez",
    email: "pmartinez@school.com",
    password: "hashedPassword3",
    telephone: "555-9101",
    role: "p", // Role de profesor
    disabled: false,
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
    subjects: subjectsArray3,
  },
  {
    id: "4",
    first_name: "Ana",
    middle_name: "Isabel",
    last_name: "Gómez",
    email: "agomez@school.com",
    password: "hashedPassword4",
    telephone: "555-1213",
    role: "p", // Role de profesor
    disabled: false,
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
    subjects: subjectsArray1,
  },
];

const ProfesorsArray3 = [
  {
    id: "5",
    first_name: "Luis",
    middle_name: "Eduardo",
    last_name: "Rodríguez",
    email: "lrodriguez@school.com",
    password: "hashedPassword5",
    telephone: "555-1415",
    role: "p", // Role de profesor
    disabled: false,
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
    subjects: subjectsArray2,
  },
];

export { ProfesorsArray1, ProfesorsArray2, ProfesorsArray3 };

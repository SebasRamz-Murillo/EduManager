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

// Primer arreglo de estudiantes
const studentsArray1: Student[] = [
  {
    id: "1",
    first_name: "Alice",
    middle_name: "Marie",
    last_name: "Smith",
    age: "15",
    email: "alice.smith@example.com",
    telephone: "123-456-7890",
    created_at: new Date(),
  },
  {
    id: "2",
    first_name: "Bob",
    middle_name: "Alexander",
    last_name: "Johnson",
    age: "16",
    email: "bob.johnson@example.com",
    telephone: "234-567-8901",
    created_at: new Date(),
  },
  {
    id: "3",
    first_name: "Carol",
    middle_name: "Ann",
    last_name: "Williams",
    age: "17",
    email: "carol.williams@example.com",
    telephone: "345-678-9012",
    created_at: new Date(),
  },
  {
    id: "4",
    first_name: "David",
    middle_name: "James",
    last_name: "Brown",
    age: "14",
    email: "david.brown@example.com",
    telephone: "456-789-0123",
    created_at: new Date(),
  },
  {
    id: "5",
    first_name: "Emily",
    middle_name: "Grace",
    last_name: "Davis",
    age: "16",
    email: "emily.davis@example.com",
    telephone: "567-890-1234",
    created_at: new Date(),
  },
];

// Segundo arreglo de estudiantes
const studentsArray2: Student[] = [
  {
    id: "6",
    first_name: "Frank",
    middle_name: "Lee",
    last_name: "Miller",
    age: "17",
    email: "frank.miller@example.com",
    telephone: "678-901-2345",
    created_at: new Date(),
  },
  {
    id: "7",
    first_name: "Grace",
    middle_name: "Ivy",
    last_name: "Wilson",
    age: "15",
    email: "grace.wilson@example.com",
    telephone: "789-012-3456",
    created_at: new Date(),
  },
  {
    id: "8",
    first_name: "Henry",
    middle_name: "Paul",
    last_name: "Moore",
    age: "16",
    email: "henry.moore@example.com",
    telephone: "890-123-4567",
    created_at: new Date(),
  },
  {
    id: "9",
    first_name: "Ivy",
    middle_name: "Jean",
    last_name: "Taylor",
    age: "14",
    email: "ivy.taylor@example.com",
    telephone: "901-234-5678",
    created_at: new Date(),
  },
  {
    id: "10",
    first_name: "Jack",
    middle_name: "Ray",
    last_name: "Anderson",
    age: "17",
    email: "jack.anderson@example.com",
    telephone: "012-345-6789",
    created_at: new Date(),
  },
];

// Tercer arreglo de estudiantes
const studentsArray3: Student[] = [
  {
    id: "11",
    first_name: "Kelly",
    middle_name: "Jane",
    last_name: "Thomas",
    age: "16",
    email: "kelly.thomas@example.com",
    telephone: "111-222-3333",
    created_at: new Date(),
  },
  {
    id: "12",
    first_name: "Liam",
    middle_name: "Charles",
    last_name: "Jackson",
    age: "15",
    email: "liam.jackson@example.com",
    telephone: "222-333-4444",
    created_at: new Date(),
  },
  {
    id: "13",
    first_name: "Mia",
    middle_name: "Rose",
    last_name: "White",
    age: "14",
    email: "mia.white@example.com",
    telephone: "333-444-5555",
    created_at: new Date(),
  },
  {
    id: "14",
    first_name: "Noah",
    middle_name: "Michael",
    last_name: "Harris",
    age: "16",
    email: "noah.harris@example.com",
    telephone: "444-555-6666",
    created_at: new Date(),
  },
  {
    id: "15",
    first_name: "Olivia",
    middle_name: "May",
    last_name: "Martin",
    age: "17",
    email: "olivia.martin@example.com",
    telephone: "555-666-7777",
    created_at: new Date(),
  },
];

// Exportando los arreglos
export { studentsArray1, studentsArray2, studentsArray3 };

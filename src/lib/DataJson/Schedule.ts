interface Schedule {
  id?: string;
  group_id: string;
  subject_id: string;
  day: "Lunes" | "Martes" | "Miércoles" | "Jueves" | "Viernes";
  start_time: Date;
  end_time: Date;
  created_at: Date;
  updated_at?: Date | null;
  deleted_at?: Date | null;
}

const schedules: Schedule[] = [
  {
    id: "1",
    group_id: "1",
    subject_id: "6",
    day: "Lunes",
    start_time: new Date("2024-09-16T08:00:00"),
    end_time: new Date("2024-09-16T10:00:00"),
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
  },
  {
    id: "2",
    group_id: "2",
    subject_id: "7",
    day: "Martes",
    start_time: new Date("2024-09-17T08:00:00"),
    end_time: new Date("2024-09-17T10:00:00"),
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
  },
  {
    id: "3",
    group_id: "3",
    subject_id: "8",
    day: "Miércoles",
    start_time: new Date("2024-09-18T09:00:00"),
    end_time: new Date("2024-09-18T11:00:00"),
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
  },
  {
    id: "4",
    group_id: "5",
    subject_id: "9",
    day: "Jueves",
    start_time: new Date("2024-09-19T09:00:00"),
    end_time: new Date("2024-09-19T11:00:00"),
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
  },
  {
    id: "5",
    group_id: "4",
    subject_id: "10",
    day: "Viernes",
    start_time: new Date("2024-09-20T10:00:00"),
    end_time: new Date("2024-09-20T12:00:00"),
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
  },
  {
    id: "6",
    group_id: "2",
    subject_id: "subject_4",
    day: "Lunes",
    start_time: new Date("2024-09-23T08:00:00"),
    end_time: new Date("2024-09-23T10:00:00"),
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
  },
  {
    id: "7",
    group_id: "1",
    subject_id: "subject_3",
    day: "Martes",
    start_time: new Date("2024-09-24T08:00:00"),
    end_time: new Date("2024-09-24T10:00:00"),
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
  },
  {
    id: "8",
    group_id: "7",
    subject_id: "subject_4",
    day: "Miércoles",
    start_time: new Date("2024-09-25T09:00:00"),
    end_time: new Date("2024-09-25T11:00:00"),
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
  },
  {
    id: "9",
    group_id: "8",
    subject_id: "subject_5",
    day: "Jueves",
    start_time: new Date("2024-09-26T09:00:00"),
    end_time: new Date("2024-09-26T11:00:00"),
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
  },
  {
    id: "10",
    group_id: "9",
    subject_id: "subject_5",
    day: "Viernes",
    start_time: new Date("2024-09-27T10:00:00"),
    end_time: new Date("2024-09-27T12:00:00"),
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
  },
];

// Definición del modelo Period en TypeScript
interface StudentAttendance {
    idStudent: string;
    attendanceStatus: boolean;
}

interface Attendance {
    id: string | null;
    studentList: StudentAttendance[];
    subjectId: string;
    groupId: string;
    teacherId: string;
    day: string;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
  }

const attendanceArray1: Attendance[] = [
    {
        id: "1",
        studentList: [
            {
                idStudent: "1",
                attendanceStatus: true
            },
            {
                idStudent: "2",
                attendanceStatus: false
            },
            {
                idStudent: "3",
                attendanceStatus: true
            }
        ],
        subjectId: "1",
        groupId: "1",
        teacherId: "1",
        day: "Lunes",
        createdAt: "2024-09-16T08:00:00",
        updatedAt: "2024-09-16T10:00:00",
        deletedAt: "2024-09-16T10:00:00"
    },
    {
        id: "2",
        studentList: [
            {
                idStudent: "1",
                attendanceStatus: true
            },
            {
                idStudent: "2",
                attendanceStatus: true
            },
            {
                idStudent: "3",
                attendanceStatus: true
            }
        ],
        subjectId: "2",
        groupId: "2",
        teacherId: "2",
        day: "Martes",
        createdAt: "2024-09-17T08:00:00",
        updatedAt: "2024-09-17T10:00:00",
        deletedAt: "2024-09-17T10:00:00"
    },
    {
        id: "3",
        studentList: [
            {
                idStudent: "1",
                attendanceStatus: true
            },
            {
                idStudent: "2",
                attendanceStatus: true
            },
            {
                idStudent: "3",
                attendanceStatus: true
            }
        ],
        subjectId: "3",
        groupId: "3",
        teacherId: "3",
        day: "Miércoles",
        createdAt: "2024-09-18T08:00:00",
        updatedAt: "2024-09-18T10:00:00",
        deletedAt: "2024-09-18T10:00:00"
    },
    {
        id: "4",
        studentList: [
            {
                idStudent: "1",
                attendanceStatus: true
            },
            {
                idStudent: "2",
                attendanceStatus: true
            },
            {
                idStudent: "3",
                attendanceStatus: true
            }
        ],
        subjectId: "4",
        groupId: "4",
        teacherId: "4",
        day: "Jueves",
        createdAt: "2024-09-19T08:00:00",
        updatedAt: "2024-09-19T10:00:00",
        deletedAt: "2024-09-19T10:00:00"
    },
];
    

export { attendanceArray1 };
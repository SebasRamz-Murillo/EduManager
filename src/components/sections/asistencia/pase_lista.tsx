import React, {useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Card,
  ThemeProvider,
  createTheme,
  Switch,
  FormControlLabel,
  TextField,
} from '@mui/material';
import { styled } from '@mui/system';
import { set } from 'date-fns';

const defaultTheme = createTheme();

const StyledCard = styled(Card)(({ theme }) => ({
  margin: '20px auto',
  padding: theme.spacing(2),
  maxWidth: '800px',
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const StyledButton = styled(Button)({
  margin: '10px',
});

interface CurrentClass {
  subject: string;
  room: string;
  day: string;
  date: string;
  startTime: string;
  endTime: string;
}


interface AttendanceRecord {
  [studentId: number]: boolean;
}

interface JustificationRecord {
  [studentId: number]: string;
}

// Datos de ejemplo para la clase actual
const currentClass: CurrentClass = {
  subject: 'Matemáticas',
  room: '1B',
  day: 'Lunes',
  date: '2024-09-16',
  startTime: '07:00',
  endTime: '08:00',
};


const DailyAttendance: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [subject, setSubject] = useState<any>([]);
    const [students, setStudents] = useState<any[]>([]);

    useEffect(() => {

        const USER = JSON.parse(localStorage.getItem("user") || "{}");
        if (USER) {
            cleanData();
            console.log("si hay datos en el localstorage", USER);
            setSubject(USER.subjects[0]);
            setStudents(USER.subjects[0].groups[0].students);
            } 
        setLoading(false); 

        }, []);
    
    const cleanData = () => {
        setSubject([]);
        setStudents([]);
    };
    
  const [attendance, setAttendance] = useState<AttendanceRecord>(
    students.reduce((acc, student) => ({ ...acc, [student.id]: true }), {})
  );
  const [showJustification, setShowJustification] = useState<boolean>(false);
  const [justifications, setJustifications] = useState<JustificationRecord>({});

  const handleAttendanceChange = (studentId: number) => {
    setAttendance((prev) => ({ ...prev, [studentId]: !prev[studentId] }));
  };

  const handleJustificationChange = (studentId: number, justification: string) => {
    setJustifications((prev) => ({ ...prev, [studentId]: justification }));
  };

  const handleSubmit = () => {
    console.log('Asistencia:', attendance);
    console.log('Justificaciones:', justifications);
    // Aquí puedes implementar la lógica para enviar los datos al servidor
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledCard>
        <Typography variant="h5" gutterBottom>
          Pase de Lista Diario
        </Typography>
        <Typography variant="h6" gutterBottom>
          {`${currentClass.subject} - ${currentClass.room}`}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {`${currentClass.day}, ${currentClass.date}`}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          {`${currentClass.startTime} - ${currentClass.endTime}`}
        </Typography>

        <FormControlLabel
          control={
            <Switch
              checked={showJustification}
              onChange={() => setShowJustification(!showJustification)}
              color="primary"
            />
          }
          label="Mostrar campo de justificación"
        />

        <StyledTableContainer >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre del Estudiante</TableCell>
                <TableCell align="center">Asistencia</TableCell>
                {showJustification && <TableCell align="center">Justificación</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell component="th" scope="row">
                    {student.first_name} {student.middle_name} {student.last_name}
                  </TableCell>
                  <TableCell align="center">
                    <Switch
                      checked={attendance[student.id]}
                      onChange={() => handleAttendanceChange(student.id)}
                      color="primary"
                    />
                  </TableCell>
                  {showJustification && (
                    <TableCell align="center">
                      <TextField
                        fullWidth
                        multiline
                        rows={2}
                        variant="outlined"
                        value={justifications[student.id] || ''}
                        onChange={(e) => handleJustificationChange(student.id, e.target.value)}
                        disabled={attendance[student.id]}
                      />
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>

        <StyledButton
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Guardar Asistencia
        </StyledButton>
      </StyledCard>
    </ThemeProvider>
  );
};

export default DailyAttendance;
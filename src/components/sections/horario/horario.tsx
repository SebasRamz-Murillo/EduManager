import React, { useState, useEffect } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Switch, 
  Typography, 
  Button,
  Card,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput
} from '@mui/material';
import { styled } from '@mui/system';

const defaultTheme = createTheme();

const StyledCard = styled(Card)(({ theme }) => ({
  margin: '20px auto',
  padding: theme.spacing(2),
  maxWidth: '100%',
  overflowX: 'auto',
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  margin: '20px 0',
  maxHeight: 440,
  [theme.breakpoints.down('sm')]: {
    maxHeight: 'none',
  },
}));

const StyledButton = styled(Button)({
  margin: '10px',
});

const ClassCell = styled(TableCell)(({ theme, duration, isoverlap }) => ({
  backgroundColor: isoverlap === 'true' ? theme.palette.error.light : theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  height: duration ? `${duration * 15}px` : 'auto',
  padding: '4px',
  verticalAlign: 'top',
  borderBottom: `1px solid ${theme.palette.primary.main}`,
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    whiteSpace: 'normal',
  },
}));

const subjects = [
    { day: 'Lunes', startTime: '07:00', endTime: '08:30', name: 'Matemáticas', room: '1B' },
    { day: 'Lunes', startTime: '07:00', endTime: '08:30', name: 'Inglés', room: '2A' },  // Choque con Matemáticas
    { day: 'Martes', startTime: '09:00', endTime: '10:30', name: 'Historia', room: '2A' },
    { day: 'Miércoles', startTime: '08:00', endTime: '09:40', name: 'Física', room: '3C' },
    { day: 'Jueves', startTime: '07:30', endTime: '09:00', name: 'Literatura', room: '4D' },
    { day: 'Viernes', startTime: '08:30', endTime: '10:00', name: 'Química', room: '5E' },
    { day: 'Sábado', startTime: '10:30', endTime: '11:00', name: 'Inglés', room: '6F' },  // Inglés se repite
    { day: 'Domingo', startTime: '10:30', endTime: '12:00', name: 'Arte', room: '7G' },
    { day: 'Lunes', startTime: '10:00', endTime: '11:30', name: 'Matemáticas', room: '1B' }, // Matemáticas se repite
    { day: 'Martes', startTime: '11:00', endTime: '12:30', name: 'Historia', room: '2A' }, // Historia se repite
    { day: 'Miércoles', startTime: '11:00', endTime: '12:30', name: 'Geografía', room: '3C' },
    { day: 'Jueves', startTime: '09:00', endTime: '10:30', name: 'Física', room: '4D' },  // Física se repite
    { day: 'Viernes', startTime: '13:00', endTime: '14:30', name: 'Educación Física', room: '5E' },
    { day: 'Sábado', startTime: '10:30', endTime: '12:00', name: 'Biología', room: '6F' },  // Choque con Inglés el mismo día
    { day: 'Domingo', startTime: '13:00', endTime: '14:30', name: 'Arte', room: '7G' }  // Arte se repite
        ];

const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const ClassSchedule = () => {
  const [showNormalWeek, setShowNormalWeek] = useState(true);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const isMobile = useMediaQuery(defaultTheme.breakpoints.down('sm'));

  const handleToggleChange = () => {
    setShowNormalWeek(!showNormalWeek);
  };

  const handleDayChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedDays(typeof value === 'string' ? value.split(',') : value);
  };

  const handleRoomChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedRooms(typeof value === 'string' ? value.split(',') : value);
  };

  const handleSubjectChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedSubjects(typeof value === 'string' ? value.split(',') : value);
  };

  const getWeekDays = () => {
    if (showNormalWeek) {
      return daysOfWeek;
    } else {
      const today = new Date().getDay();
      return Array.from({ length: 7 }, (_, i) => daysOfWeek[(today + i) % 7]);
    }
  };

  const parseTime = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  };

  const getFilteredSubjects = () => {
    return subjects.filter(subject => 
      (selectedDays.length === 0 || selectedDays.includes(subject.day)) &&
      (selectedRooms.length === 0 || selectedRooms.includes(subject.room)) &&
      (selectedSubjects.length === 0 || selectedSubjects.includes(subject.name))
    );
  };

  const getEarliestStartTime = () => {
    const filteredSubjects = getFilteredSubjects();
    return filteredSubjects.reduce((earliest, subject) => {
      const startTime = parseTime(subject.startTime);
      return startTime < earliest ? startTime : earliest;
    }, 24 * 60);
  };

  const getLatestEndTime = () => {
    const filteredSubjects = getFilteredSubjects();
    return filteredSubjects.reduce((latest, subject) => {
      const endTime = parseTime(subject.endTime);
      return endTime > latest ? endTime : latest;
    }, 0);
  };

  const [earliestStartTime, setEarliestStartTime] = useState(getEarliestStartTime());
  const [latestEndTime, setLatestEndTime] = useState(getLatestEndTime());

  useEffect(() => {
    setEarliestStartTime(getEarliestStartTime());
    setLatestEndTime(getLatestEndTime());
  }, [selectedDays, selectedRooms, selectedSubjects]);

  const timeSlots = Array.from(
    { length: (latestEndTime - earliestStartTime) / 15 + 1 },
    (_, i) => formatTime(earliestStartTime + i * 15)
  );

  const getClassesForTimeSlot = (day, time) => {
    return getFilteredSubjects().filter(subject =>
      subject.day === day &&
      parseTime(subject.startTime) <= parseTime(time) &&
      parseTime(subject.endTime) > parseTime(time)
    );
  };

  const getDuration = (startTime, endTime) => {
    return Math.ceil((parseTime(endTime) - parseTime(startTime)) / 15);
  };

  const handleClassClick = (subject) => {
    console.log('Clase seleccionada:', subject);
  };

  const handleSuperpositionClick = (subjects) => {
    console.log('Superposición de clases:', subjects);
  };


  const uniqueRooms = [...new Set(subjects.map(subject => subject.room))];
  const uniqueSubjects = [...new Set(subjects.map(subject => subject.name))];

  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledCard>
        <Typography variant="h6" gutterBottom>
          Horario de Clases
        </Typography>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <FormControl style={{ minWidth: 120, margin: '10px' }}>
            <InputLabel>Filtrar por día</InputLabel>
            <Select
              multiple
              value={selectedDays}
              onChange={handleDayChange}
              input={<OutlinedInput label="Filtrar por día" />}
              renderValue={(selected) => selected.join(', ')}
            >
              {daysOfWeek.map((day) => (
                <MenuItem key={day} value={day}>
                  <Checkbox checked={selectedDays.indexOf(day) > -1} />
                  <ListItemText primary={day} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl style={{ minWidth: 120, margin: '10px' }}>
            <InputLabel>Filtrar por salón</InputLabel>
            <Select
              multiple
              value={selectedRooms}
              onChange={handleRoomChange}
              input={<OutlinedInput label="Filtrar por salón" />}
              renderValue={(selected) => selected.join(', ')}
            >
              {uniqueRooms.map((room) => (
                <MenuItem key={room} value={room}>
                  <Checkbox checked={selectedRooms.indexOf(room) > -1} />
                  <ListItemText primary={room} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl style={{ minWidth: 120, margin: '10px' }}>
            <InputLabel>Filtrar por materia</InputLabel>
            <Select
              multiple
              value={selectedSubjects}
              onChange={handleSubjectChange}
              input={<OutlinedInput label="Filtrar por materia" />}
              renderValue={(selected) => selected.join(', ')}
            >
              {uniqueSubjects.map((subject) => (
                <MenuItem key={subject} value={subject}>
                  <Checkbox checked={selectedSubjects.indexOf(subject) > -1} />
                  <ListItemText primary={subject} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
            <Typography>Ver semana normal</Typography>
            <Switch
              checked={showNormalWeek}
              onChange={handleToggleChange}
              color="primary"
            />
          </div>
        </div>

        <StyledTableContainer component={Paper}>
          <Table stickyHeader size={isMobile ? "small" : "medium"}>
            <TableHead>
              <TableRow>
                <TableCell>Hora</TableCell>
                {getWeekDays().filter(day => selectedDays.length === 0 || selectedDays.includes(day)).map((day, index) => (
                  <TableCell key={index}>{isMobile ? day.substring(0, 3) : day}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {timeSlots.map((time, index) => (
                <TableRow key={index}>
                  <TableCell>{time}</TableCell>
                  {getWeekDays().filter(day => selectedDays.length === 0 || selectedDays.includes(day)).map((day, dayIndex) => {
                    const classes = getClassesForTimeSlot(day, time);
                    if (classes.length > 0) {
                        if(classes.length === 1){                      
                            const classToShow = classes[0];
                            if (classToShow.startTime === time) {
                                const duration = getDuration(classToShow.startTime, classToShow.endTime);
                                return (
                                <ClassCell
                                    key={dayIndex}
                                    rowSpan={duration}
                                    duration={duration}
                                    isoverlap={(classes.length > 1).toString()}
                                    onClick={() => handleClassClick(classToShow)}
                                >
                                    {`${classToShow.name} - ${classToShow.room}`}
                                    <br />
                                    {`${classToShow.startTime} - ${classToShow.endTime}`}
                                    {classes.length > 1 && <br />}
                                    {classes.length > 1 && '⚠️ Superposición'}
                                </ClassCell>
                                );
                            }
                        }                      
                    else{
                      return (
                        <ClassCell
                          key={dayIndex}
                          duration={1}
                          isoverlap={(classes.length > 1).toString()}
                          onClick={() => handleSuperpositionClick(classes)}
                        >
                          {`⚠️ ${classes.length} clases superpuestas`}
                          {classes.map((classToShow, index) => (
                            <div key={index}> 
                                {`${classToShow.name} - ${classToShow.room}`}
                                <br />
                                {`${classToShow.startTime} - ${classToShow.endTime}`}
                            </div>
                            ))}
                            
                        </ClassCell>
                      );
                        }
                        return null;
                    }
                    return <TableCell key={dayIndex} />;
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>

        <StyledButton variant="contained" color="primary" startIcon={<span>✏️</span>}>
          Tomar asistencia de clase actual
        </StyledButton>
        
        <StyledButton variant="contained" color="primary" startIcon={<span>✏️</span>}>
          Ver currícula de clase próxima
        </StyledButton>
      </StyledCard>
    </ThemeProvider>
  );
};

export default ClassSchedule;
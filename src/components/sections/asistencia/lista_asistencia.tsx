import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Card,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from '@mui/material';
import { styled } from '@mui/system';

// Datos de ejemplo (mantenidos del ejemplo anterior)
const subjects = ['Matemáticas', 'Historia', 'Física', 'Literatura'];
const groups = ['A', 'B', 'C'];

const generateAttendanceData = () => {
  // ... (mantén la función de generación de datos igual)
};

const attendanceData = generateAttendanceData();

const AttendanceHistory = () => {
  const [subject, setSubject] = useState('');
  const [group, setGroup] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredData, setFilteredData] = useState(attendanceData);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSearch = () => {
    // ... (mantén la lógica de búsqueda igual)
  };

  const handleRowClick = (date) => {
    setSelectedDate(date);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Card className="m-5 p-6 max-w-full mx-auto">
      <Typography variant="h4" className="mb-6 text-center">
        Histórico de Pases de Lista
      </Typography>

      <Box className="flex flex-wrap justify-between items-end mb-6">
        <FormControl className="m-2 min-w-[200px] flex-grow">
          <InputLabel>Materia</InputLabel>
          <Select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            label="Materia"
          >
            {subjects.map((sub) => (
              <MenuItem key={sub} value={sub}>{sub}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className="m-2 min-w-[100px] flex-grow">
          <InputLabel>Grupo</InputLabel>
          <Select
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            label="Grupo"
          >
            {groups.map((g) => (
              <MenuItem key={g} value={g}>{g}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Fecha de inicio"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          className="m-2 flex-grow"
        />

        <TextField
          label="Fecha de fin"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          className="m-2 flex-grow"
        />

        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSearch} 
          className="m-2 px-8 py-3"
        >
          Buscar
        </Button>
      </Box>

      <TableContainer component={Paper} className="mt-6 mb-6 max-h-[600px]">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell className="font-bold">Fecha</TableCell>
              <TableCell align="center" className="font-bold">Presentes</TableCell>
              <TableCell align="center" className="font-bold">Ausentes</TableCell>
              <TableCell align="center" className="font-bold">Total de Estudiantes</TableCell>
              <TableCell align="center" className="font-bold">Porcentaje de Asistencia</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow 
                key={row.date} 
                onClick={() => handleRowClick(row)}
                className="cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <TableCell>{row.date}</TableCell>
                <TableCell align="center">{row.presentCount}</TableCell>
                <TableCell align="center">{row.absentCount}</TableCell>
                <TableCell align="center">{row.totalStudents}</TableCell>
                <TableCell align="center">
                  <span className={`px-2 py-1 rounded ${
                    (row.presentCount / row.totalStudents) >= 0.9 ? 'bg-green-200' :
                    (row.presentCount / row.totalStudents) >= 0.7 ? 'bg-yellow-200' :
                    'bg-red-200'
                  }`}>
                    {((row.presentCount / row.totalStudents) * 100).toFixed(2)}%
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog 
        open={openDialog} 
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle className="bg-blue-600 text-white">
          Detalle de Asistencia - {selectedDate?.date}
        </DialogTitle>
        <DialogContent className="mt-4">
          <Box className="flex justify-between mb-4">
            <Typography variant="h6">
              Presentes: {selectedDate?.presentCount}
            </Typography>
            <Typography variant="h6">
              Ausentes: {selectedDate?.absentCount}
            </Typography>
            <Typography variant="h6">
              Total: {selectedDate?.totalStudents}
            </Typography>
          </Box>
          <List className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedDate?.students.map((student) => (
              <ListItem 
                key={student.id}
                className={`rounded-lg ${student.present ? 'bg-green-100' : 'bg-red-100'}`}
              >
                <Avatar className="mr-4">
                  {student.name.charAt(0)}
                </Avatar>
                <ListItemText 
                  primary={student.name} 
                  secondary={student.present ? "Presente" : "Ausente"} 
                />
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default AttendanceHistory;
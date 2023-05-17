import React, { useState } from 'react';
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  CardActions
} from '@mui/material';

const studentData = [
    {
      id: 1,
      name: 'John Doe',
      major: 'Computer Science',
      email: 'johndoe@example.com',
      phone: '+1 123-456-7890',
    },
    {
      id: 2,
      name: 'Jane Smith',
      major: 'Business Administration',
      email: 'janesmith@example.com',
      phone: '+1 987-654-3210',
    },
    {
      id: 3,
      name: 'Alex Johnson',
      major: 'Electrical Engineering',
      email: 'alexjohnson@example.com',
      phone: '+1 555-123-4567',
    },
    {
      id: 4,
      name: 'Emily Davis',
      major: 'Psychology',
      email: 'emilydavis@example.com',
      phone: '+1 333-888-7777',
    },
    {
      id: 5,
      name: 'Michael Brown',
      major: 'Biology',
      email: 'michaelbrown@example.com',
      phone: '+1 777-222-3333',
    },
  ];

const StudentDirectory = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Typography variant="h2" align="center" sx={{ marginBottom: '2rem' }}>
        Student Directory
      </Typography>
      <Grid container spacing={2}>
        {studentData.map((student) => (
          <Grid item xs={12} sm={6} md={4} key={student.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3">
                  {student.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: '1rem' }}>
                  Major: {student.major}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: '1rem' }}>
                  Email: {student.email}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: '1rem' }}>
                  Phone: {student.phone}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  onClick={() => handleViewDetails(student)}
                  size="small"
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        {selectedStudent && (
          <>
            <DialogTitle>Student Details</DialogTitle>
            <DialogContent>
              <Typography variant="h6">Name: {selectedStudent.name}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: '1rem' }}>
                Major: {selectedStudent.major}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: '1rem' }}>
                Email: {selectedStudent.email}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: '1rem' }}>
                Phone: {selectedStudent.phone}
              </Typography>
              {/* Add additional fields for student details */}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
              {/* Add additional actions or buttons */}
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default StudentDirectory;

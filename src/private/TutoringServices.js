import React from 'react';
import { Typography, Container, Grid, Card, CardContent } from '@mui/material';

const tutoringData = [
  {
    id: 1,
    subject: 'Mathematics',
    description: 'Experienced tutors available for math tutoring. Improve your math skills and ace your exams.',
    price: '30 USD/hour',
  },
  {
    id: 2,
    subject: 'English Language',
    description: 'Enhance your English language skills with our qualified tutors. Learn grammar, vocabulary, and communication.',
    price: '25 USD/hour',
  },
  {
    id: 3,
    subject: 'Science',
    description: 'Get help from our science tutors to understand complex scientific concepts and excel in your science subjects.',
    price: '35 USD/hour',
  },
  // Add more tutoring services as needed
];

const TutoringServices = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Typography variant="h2" align="center" sx={{ marginBottom: '2rem' }}>
        Tutoring Services
      </Typography>
      <Grid container spacing={2}>
        {tutoringData.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3">
                  {service.subject}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: '1rem' }}>
                  {service.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: '1rem' }}>
                  Price: {service.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TutoringServices;

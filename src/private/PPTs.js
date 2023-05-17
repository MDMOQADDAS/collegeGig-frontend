import React from 'react';
import { Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';

const PPTs = () => {
  const ppts = [
    {
      id: 1,
      title: 'Introduction to Machine Learning',
      link: 'https://www.example.com/ppt1',
    },
    {
      id: 2,
      title: 'Data Visualization Techniques',
      link: 'https://www.example.com/ppt2',
    },
    {
      id: 3,
      title: 'Effective Presentation Skills',
      link: 'https://www.example.com/ppt3',
    },
    {
      id: 4,
      title: 'Digital Marketing Strategies',
      link: 'https://www.example.com/ppt4',
    },
    {
      id: 5,
      title: 'The Art of Negotiation',
      link: 'https://www.example.com/ppt5',
    },
    {
      id: 6,
      title: 'Project Management Best Practices',
      link: 'https://www.example.com/ppt6',
    },
    {
      id: 7,
      title: 'Cybersecurity Essentials',
      link: 'https://www.example.com/ppt7',
    },
    {
      id: 8,
      title: 'Leadership and Team Building',
      link: 'https://www.example.com/ppt8',
    },
    {
      id: 9,
      title: 'Financial Planning for Beginners',
      link: 'https://www.example.com/ppt9',
    },
    {
      id: 10,
      title: 'Effective Time Management',
      link: 'https://www.example.com/ppt10',
    },
  ];

  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Typography variant="h2" align="center" sx={{ marginBottom: '2rem' }}>
        PPTs
      </Typography>
      <Grid container spacing={2}>
        {ppts.map((ppt) => (
          <Grid item xs={12} sm={6} md={4} key={ppt.id}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {ppt.title}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                href={ppt.link}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
              >
                View PPT
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PPTs;

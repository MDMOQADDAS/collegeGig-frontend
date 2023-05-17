import React from 'react';
import { Typography, Container, Grid, Card, CardContent } from '@mui/material';

const newsData = [
  {
    id: 1,
    title: 'New Student Orientation',
    description: 'Join us for the upcoming New Student Orientation to learn about campus resources and get acquainted with the university community.',
    date: 'May 10, 2023',
  },
  {
    id: 2,
    title: 'Career Fair',
    description: 'Don\'t miss the Career Fair happening next week. Network with top companies and explore job opportunities in various fields.',
    date: 'April 25, 2023',
  },
  {
    id: 3,
    title: 'Guest Lecture Series',
    description: 'We are hosting a series of guest lectures featuring industry experts. Gain valuable insights and broaden your knowledge.',
    date: 'June 5, 2023',
  },
  {
    id: 4,
    title: 'Sports Tournament',
    description: 'Get ready for the annual sports tournament. Compete with fellow students in a variety of sports and showcase your athletic skills.',
    date: 'July 12, 2023',
  },
  {
    id: 5,
    title: 'Art Exhibition',
    description: 'Visit the campus art exhibition to appreciate the creativity and talent of our students. The exhibition runs throughout the month.',
    date: 'August 8, 2023',
  },
];

const CampusNews = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Typography variant="h2" align="center" sx={{ marginBottom: '2rem' }}>
        Campus News
      </Typography>
      <Grid container spacing={2}>
        {newsData.map((news) => (
          <Grid item xs={12} sm={6} md={4} key={news.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3">
                  {news.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: '1rem' }}>
                  {news.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: '1rem' }}>
                  Date: {news.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CampusNews;

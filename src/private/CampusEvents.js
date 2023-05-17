import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

function CampusEvents(props) {
  return (
    <>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h1" component="h1" sx={{ mb: 4 }}>
          Campus Events
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h2" component="h2" sx={{ mb: 1 }}>
                Lecture on Artificial Intelligence
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Date: May 20, 2023
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Location: Main Auditorium
              </Typography>
              <Typography variant="body1">
                Description: Dr Jack will be the main guest, he will discuss about the core and fundamental of the Artificial Intelligence.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h2" component="h2" sx={{ mb: 1 }}>
                Coding Hackathon
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Date: June 1, 2023
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Location: Sports Field
              </Typography>
              <Typography variant="body1">
                Description: Dr Krish 5⭐ at codechef will be the host.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h2" component="h2" sx={{ mb: 1 }}>
                2 Days Workshop on Full Stack Development
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Date: June 15, 2023
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Location: Student Center
              </Typography>
              <Typography variant="body1">
                Description: MD MOQADDAS will be the instructor.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
}

export default CampusEvents;

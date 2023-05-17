import React from 'react';
import { Typography, Container } from '@mui/material';

const CampusMap = () => {
  const address = 'Motihari College of Engineering, NH 28A, Furshatpur Bariyarpur, Motihari, Motihari, Bihar, Pin - 845401';

  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Typography variant="h2" align="center" sx={{ marginBottom: '2rem' }}>
        Campus Map
      </Typography>
      <Typography variant="body1" align="center" sx={{ marginBottom: '2rem' }}>
         MOTIHARI COLLEGE OF ENGINEERING, MOTIHARI
      </Typography>
      <div style={{ textAlign: 'center' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.3046576094857!2d84.93012851503846!3d26.606679733260435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399334955ec36d69%3A0x575fce8e33ac7362!2sMotihari%20College%20Of%20Engineering%20Motihari!5e0!3m2!1sen!2sin!4v1684288641757!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Campus Map"
        ></iframe>
      </div>
      <Typography variant="body2" align="center" sx={{ marginTop: '2rem' }}>
         {address}
      </Typography>
    </Container>
  );
};

export default CampusMap;

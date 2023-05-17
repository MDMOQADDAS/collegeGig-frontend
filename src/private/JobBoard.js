import React, {useState} from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const jobData = [
    {
        id: 1,
        name: 'Software Engineer',
        description: 'We are seeking a skilled Software Engineer to join our dynamic team. Responsibilities include developing high-quality software solutions and collaborating with cross-functional teams.',
        ctc: '120,000 USD',
    },
    {
        id: 2,
        name: 'Marketing Specialist',
        description: 'We are looking for a Marketing Specialist with strong analytical skills and a creative mindset. The role involves developing and executing marketing campaigns to drive brand awareness and customer acquisition.',
        ctc: '80,000 USD',
    },
    {
        id: 3,
        name: 'Data Analyst',
        description: 'We are hiring a Data Analyst to interpret and analyze complex data sets, providing actionable insights to drive business decisions. Proficiency in data visualization and statistical analysis is required.',
        ctc: '90,000 USD',
    },
    {
        id: 4,
        name: 'Graphic Designer',
        description: 'We are seeking a talented Graphic Designer to create visually appealing designs for various marketing materials, including websites, brochures, and social media posts. Proficiency in Adobe Creative Suite is required.',
        ctc: '70,000 USD',
    },
    {
        id: 5,
        name: 'Sales Manager',
        description: 'We are hiring an experienced Sales Manager to lead our sales team and drive revenue growth. Responsibilities include setting sales targets, developing strategies, and nurturing client relationships.',
        ctc: '150,000 USD',
    },
];


function JobBoard(props) {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    const handleJobClick = (jobId) => {
        const selectedJob = jobData.find(job => job.id === jobId);
        setSelectedJob(selectedJob);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    return (
        <div className='job-board-main-div'>
        <div className="job-board">
          {jobData.map((job) => (
            <div key={job.id} className="job-grid">
              <h3>{job.name}</h3>
              <p>{job.description}</p>
              <p>CTC: {job.ctc}</p>
              <button onClick={() => handleJobClick(job.id)} className="apply-button">Apply</button>
            </div>
          ))}
        </div>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          {selectedJob && (
            <>
              <DialogTitle>{selectedJob.name}</DialogTitle>
              <DialogContent>
                <p>{selectedJob.description}</p>
                <p>CTC: {selectedJob.ctc}</p>
                {/* Add additional content or form fields for applying to the job */}
              </DialogContent>
              <DialogActions>
                <Button href="https://www.google.com/search?q=google+job" variant='contained'>Apply</Button>
                <Button onClick={handleCloseDialog}>Close</Button>
               
              </DialogActions>
            </>
          )}
        </Dialog>
      </div>
    );
}

export default JobBoard;

import React from 'react';
import { Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';

const LibraryResources = () => {
    const books = [
        {
            id: 1,
            name: 'To Kill a Mockingbird',
            description: 'A classic novel by Harper Lee',
            link: 'https://www.example.com/book1',
        },
        {
            id: 2,
            name: '1984',
            description: 'A dystopian novel by George Orwell',
            link: 'https://www.example.com/book2',
        },
        {
            id: 3,
            name: 'The Great Gatsby',
            description: 'A novel by F. Scott Fitzgerald',
            link: 'https://www.example.com/book3',
        },
        {
            id: 4,
            name: 'Pride and Prejudice',
            description: 'A romantic novel by Jane Austen',
            link: 'https://www.example.com/book4',
        },
        {
            id: 5,
            name: 'The Catcher in the Rye',
            description: 'A coming-of-age novel by J.D. Salinger',
            link: 'https://www.example.com/book5',
        },
        {
            id: 6,
            name: 'To Kill a Mockingbird',
            description: 'A classic novel by Harper Lee',
            link: 'https://www.example.com/book6',
        },
        {
            id: 7,
            name: '1984',
            description: 'A dystopian novel by George Orwell',
            link: 'https://www.example.com/book7',
        },
        {
            id: 8,
            name: 'The Great Gatsby',
            description: 'A novel by F. Scott Fitzgerald',
            link: 'https://www.example.com/book8',
        },
        {
            id: 9,
            name: 'Pride and Prejudice',
            description: 'A romantic novel by Jane Austen',
            link: 'https://www.example.com/book9',
        },
        {
            id: 10,
            name: 'The Catcher in the Rye',
            description: 'A coming-of-age novel by J.D. Salinger',
            link: 'https://www.example.com/book10',
        },
        {
            id: 11,
            name: 'To Kill a Mockingbird',
            description: 'A classic novel by Harper Lee',
            link: 'https://www.example.com/book11',
        },
        {
            id: 12,
            name: '1984',
            description: 'A dystopian novel by George Orwell',
            link: 'https://www.example.com/book12',
        },
        {
            id: 13,
            name: 'The Great Gatsby',
            description: 'A novel by F. Scott Fitzgerald',
            link: 'https://www.example.com/book13',
        },
        {
            id: 14,
            name: 'Pride and Prejudice',
            description: 'A romantic novel by Jane Austen',
            link: 'https://www.example.com/book14',
        },
        {
            id: 15,
            name: 'The Catcher in the Rye',
            description: 'A coming-of-age novel by J.D. Salinger',
            link: 'https://www.example.com/book15',
        },
        {
            id: 16,
            name: 'To Kill a Mockingbird',
            description: 'A classic novel by Harper Lee',
            link: 'https://www.example.com/book16',
        },
        {
            id: 17,
            name: 'Atomic Habits',
            description: 'An easy and proven way to build good habits and break bad ones.',
            link: 'https://www.example.com/atomic-habits',
        },
        {
            id: 18,
            name: 'Sapiens: A Brief History of Humankind',
            description: 'A thought-provoking exploration of the history of Homo sapiens.',
            link: 'https://www.example.com/sapiens',
        },
        {
            id: 19,
            name: 'The Alchemist',
            description: 'A mystical story about following your dreams and the meaning of life.',
            link: 'https://www.example.com/the-alchemist',
        },

        {
            id: 20,
            name: 'The Lean Startup',
            description: 'Learn how to build successful startups by applying lean principles.',
            link: 'https://www.example.com/the-lean-startup',
        },
    ];

    return (
        <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
            <Typography variant="h2" align="center" sx={{ marginBottom: '2rem' }}>
                Library Resources
            </Typography>
            <Grid container spacing={2}>
                {books.map((book) => (
                    <Grid item xs={12} sm={6} md={4} key={book.id}>
                        <Card elevation={3}>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    {book.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {book.description}
                                </Typography>
                            </CardContent>
                            <Button
                                variant="contained"
                                href={book.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                fullWidth
                            >
                                View Book
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default LibraryResources;

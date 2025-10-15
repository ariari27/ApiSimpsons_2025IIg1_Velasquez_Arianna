import { useEffect, useState } from 'react';
import { Grid, Typography, CircularProgress, Box, Button } from '@mui/material';
import CardCharacter from '../../components/CardCharacter/CardCharacter.jsx';
import './CharactersPage.css';

const CharactersPage = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchCharacters = async (pageNum = 1) => {
        setLoading(true);
        try {
            const response = await fetch(`https://thesimpsonsapi.com/api/characters?page=${pageNum}`);
            const data = await response.json();

            setCharacters(data.results || []);
            setTotalPages(data.pages || 1);
        } catch (error) {
            console.error('Error al obtener los personajes:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCharacters(page);
    }, [page]);

    return (
        <div className="characters-container">
            <Typography variant="h3" className="characters-title">
                Personajes de Los Simpsons
            </Typography>

            {loading ? (
                <div className="loading-container">
                    <CircularProgress color="warning" />
                </div>
            ) : characters.length > 0 ? (
                <>
                    <Grid container spacing={3} justifyContent="center">
                        {characters.map((character) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
                                <CardCharacter character={character} />
                            </Grid>
                        ))}
                    </Grid>

                    {/* Paginación */}
                    <Box className="pagination-container">
                        <Button
                            variant="contained"
                            className="pagination-btn"
                            disabled={page === 1}
                            onClick={() => setPage(page - 1)}
                        >
                            ⬅ Anterior
                        </Button>

                        <Typography className="pagination-info">
                            Página {page} de {totalPages}
                        </Typography>

                        <Button
                            variant="contained"
                            className="pagination-btn"
                            disabled={page === totalPages}
                            onClick={() => setPage(page + 1)}
                        >
                            Siguiente ➡
                        </Button>
                    </Box>
                </>
            ) : (
                <Typography variant="h6" sx={{ color: '#fff', marginTop: '2rem' }}>
                    No se encontraron personajes 😢
                </Typography>
            )}
        </div>
    );
};

export default CharactersPage;

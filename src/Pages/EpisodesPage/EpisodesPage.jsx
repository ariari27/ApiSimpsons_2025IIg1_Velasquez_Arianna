import { useEffect, useState } from 'react';
import { Grid, Typography, CircularProgress, Box, Button } from '@mui/material';
import CardEpisode from '../../components/CardEpisode/CardEpisode.jsx';
import './EpisodesPage.css';

const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchEpisodes = async (pageNum = 1) => {
        setLoading(true);
        try {
            const response = await fetch(`https://thesimpsonsapi.com/api/episodes?page=${pageNum}`);
            const data = await response.json();

            setEpisodes(data.results || []);
            setTotalPages(data.pages || 1);
        } catch (error) {
            console.error('Error al obtener los episodios:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEpisodes(page);
    }, [page]);

    return (
        <div className="episodes-container">
            <Typography variant="h3" className="episodes-title">
                Episodios de Los Simpsons
            </Typography>

            {loading ? (
                <div className="loading-container">
                    <CircularProgress color="warning" />
                </div>
            ) : (
                <>
                    <Grid container spacing={3} justifyContent="center">
                        {episodes.map((episode) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={episode.id}>
                                <CardEpisode episode={episode} />
                            </Grid>
                        ))}
                    </Grid>

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
            )}
        </div>
    );
};

export default EpisodesPage;

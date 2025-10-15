import { useEffect, useState } from 'react';
import { Grid, Typography, CircularProgress, Box, Button } from '@mui/material';
import CardLocation from '../../components/CardLocation/CardLocation.jsx';
import './LocationsPage.css';

const LocationsPage = () => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchLocations = async (pageNum = 1) => {
        setLoading(true);
        try {
            const response = await fetch(`https://thesimpsonsapi.com/api/locations?page=${pageNum}`);
            const data = await response.json();
            setLocations(data.results || []);
            setTotalPages(data.pages || 1);
        } catch (error) {
            console.error('Error al obtener los lugares:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLocations(page);
    }, [page]);

    return (
        <div className="locations-container">
            <Typography variant="h3" className="locations-title">
                Lugares de Springfield
            </Typography>

            {loading ? (
                <div className="loading-container">
                    <CircularProgress color="warning" />
                </div>
            ) : (
                <>
                    <Grid container spacing={3} justifyContent="center">
                        {locations.map((location) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={location.id}>
                                <CardLocation location={location} />
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

export default LocationsPage;

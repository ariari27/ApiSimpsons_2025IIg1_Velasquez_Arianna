import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import './CharactersDetailsPage.css';

const CharactersDetailsPage = () => {
    const { id } = useParams();


    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            const response = await fetch(`https://thesimpsonsapi.com/api/characters/${id}`);
            const data = await response.json();
            setCharacter(data);
        };
        fetchCharacter();
    }, [id]);

    if (!character) return <Typography>Cargando...</Typography>;

    const today = new Date();
    let edadR
    if (character.birthdate != null) {
        const birth = new Date(character.birthdate);
        edadR = today.getFullYear() - birth.getFullYear();
        const mes = today.getMonth() - birth.getMonth();
        if (mes < 0 || (mes === 0 && today.getDate() < birth.getDate())) {
            edadR--;
        }
    }

    // Ajustar si aún no ha cumplido años este año


    return (

        <Box className="characters-details-container">
            <Button component={Link} to="/personajes" className="back-button">
                ← Volver a Personajes
            </Button>

            <Box className="character-card-details">
                <img
                    src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`}
                    alt={character.name}
                    className="character-portrait"
                />

                <Box className="character-info-details">
                    <Typography variant="h4" className="character-name">
                        {character.name}
                    </Typography>
                    <Typography className="character-detail">
                        <strong>Edad en la serie:</strong> {character.age || 'Unknown'}
                    </Typography>
                    <Typography className="character-detail">
                        <strong>Edad real:</strong> {edadR || 'Unknown'}
                    </Typography>
                    <Typography className="character-detail">
                        <strong>Fecha de nacimiento:</strong> {character.birthdate || 'Unknown'}
                    </Typography>
                    <Typography className="character-detail">
                        <strong>Género:</strong> {character.gender || 'Unknown'}
                    </Typography>
                    <Typography className="character-detail">
                        <strong>Ocupación:</strong> {character.occupation || 'Unknown'}
                    </Typography>
                    <Typography className="character-detail">
                        <strong>Estado:</strong> {character.status || 'Unknown'}
                    </Typography>

                    <Box className="character-phrases">
                        <Typography variant="h6">Frases famosas:</Typography>
                        {character.phrases?.length ? (
                            <ul>
                                {character.phrases.map((p, i) => (
                                    <li key={i}>{p}</li>
                                ))}
                            </ul>
                        ) : (
                            <Typography>No hay frases disponibles.</Typography>
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CharactersDetailsPage;

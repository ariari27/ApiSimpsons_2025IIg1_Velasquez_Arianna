import { useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./HomePage.css";
import CardDailyCharacter from "../../components/CardDailyCharacter/CardDailyCharacter";

const HomePage = () => {
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            const today = new Date();
            const daySeed =
                today.getFullYear() * 10000 +
                (today.getMonth() + 1) * 100 +
                today.getDate();

            const dailyId = (daySeed % 40) + 1;

            const response = await fetch(`https://thesimpsonsapi.com/api/characters/${dailyId}`);
            const data = await response.json();

            setCharacter(data);
        };
        fetchCharacter();
    }, []);

    return (
        <Box className="home-container">
            <Box className="home-content">
                <Typography variant="h3" className="home-title">
                    ¡Bienvenido a Springfield!
                </Typography>
                <Typography variant="h6" className="home-subtitle">
                    Explora los personajes, episodios y lugares de tu serie favorita.
                </Typography>

                <Button
                    variant="contained"
                    component={Link}
                    to="/personajes"
                    className="home-button"
                >
                    Ver Personajes
                </Button>

                <CardDailyCharacter character={character} />
            </Box>
        </Box>
    );
};

export default HomePage;

import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./CardDailyCharacter.css";

const CardDailyCharacter = ({ character }) => {
    if (!character) return null;

    const randomId = Math.floor(Math.random() * character.phrases.length);

    return (
        <Link
            to={`/personaje/${character.id}`}
            className="daily-character-link"
            style={{ textDecoration: "none" }}
        >
            <Card className="daily-character-card" elevation={6}>
                <CardContent className="daily-character-content">
                    <Typography variant="h6" className="daily-character-subtitle">
                        ¡Tu personaje del día!
                    </Typography>

                    <Typography variant="h5" className="daily-character-title">
                        {character.name}
                    </Typography>

                    <img
                        src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`}
                        alt={character.name}
                        className="daily-character-img"
                    />

                    <Typography variant="body1" className="daily-character-quote">
                        “{character.phrases?.[randomId]}”
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default CardDailyCharacter;


import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './CardCharacter.css';

const CardCharacter = ({ character }) => {
    const phrase =
        character.phrases?.find((p) => p.length <= 50) || character.phrases?.[0] || '';
    const statusColor =
        character.status?.toLowerCase() === 'alive'
            ? '#4caf50'
            : character.status?.toLowerCase() === 'deceased'
                ? '#f44336'
                : '#ffeb3b';

    return (
        <Link to={`/personaje/${character.id}`} className="character-link">
            <Card className="character-card" elevation={4}>
                <CardMedia
                    component="img"
                    image={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`}
                    alt={character.name}
                    className="character-image"
                />
                <CardContent className="character-info">
                    <Typography variant="h7" className="character-name">
                        {character.name}
                    </Typography>
                    <Typography variant="body2" className="character-occupation">
                        {character.occupation || '—'}
                    </Typography>
                    <Box className="container-age-status">
                        <Typography variant="body2" className="character-age">
                            Age: {character.age || 'Unknown'}
                        </Typography>
                        <Typography variant="body2" color={statusColor} className="character-status">
                            {character.status || 'Unknown'}
                        </Typography>
                    </Box>
                    <Typography variant="body1" className="character-quote">
                        {phrase ? `"${phrase}"` : ''}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default CardCharacter;

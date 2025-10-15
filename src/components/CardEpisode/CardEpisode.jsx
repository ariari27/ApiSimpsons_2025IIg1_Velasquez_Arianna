import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import './CardEpisode.css';

const CardEpisode = ({ episode }) => {
    return (
        <Card className="episode-card" elevation={4}>
            <CardMedia
                component="img"
                image={`https://cdn.thesimpsonsapi.com/500${episode.image_path}`}
                alt={episode.name}
                className="episode-image"
            />
            <CardContent className="episode-info">
                <Typography variant="h6" className="episode-title">
                    {episode.name}
                </Typography>

                <Typography variant="body2" className="episode-season">
                    Season {episode.season} — Episode {episode.episode_number}
                </Typography>

                <Typography variant="body2" className="episode-date">
                    {episode.airdate || 'Air date not available.'}
                </Typography>

                <Typography variant="body2" className="episode-synopsis">
                    {episode.synopsis || 'Synopsis not available.'}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardEpisode;

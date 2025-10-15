import { Container, Box } from '@mui/material';
import './Main.css';
import backgroundImage from '../../assets/Image/Background.jpg';

const Main = ({ children }) => {
    return (
        <Box className="main-wrapper">
            {/* Sección inicial blanca detrás del navbar */}
            <Box className="navbar-background"></Box>

            {/* Fondo global que empieza después del navbar */}
            <Box
                className="main-background"
                sx={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            ></Box>

            <Container
                maxWidth="xl"
                disableGutters
                className="main-container"
            >
                <Box className="main-content">{children}</Box>
            </Container>
        </Box>
    );
};

export default Main;

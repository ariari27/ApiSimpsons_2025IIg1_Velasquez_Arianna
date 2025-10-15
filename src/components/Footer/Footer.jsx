import { Box, Typography, Link as MuiLink } from '@mui/material';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <Typography variant="h6" className="footer-title">
                The Simpsons App
            </Typography>

            <Typography variant="body2" className="footer-text">
                Arianna Velásquez — Proyecto educativo inspirado en la serie de Matt Groening.
            </Typography>

            <Box className="footer-links">
                <MuiLink href="https://www.thesimpsonsapi.com" target="_blank" rel="noopener" className="footer-link">
                    API Oficial
                </MuiLink>
                <MuiLink href="https://www.fox.com/the-simpsons/" target="_blank" rel="noopener" className="footer-link">
                    Fox
                </MuiLink>
                <MuiLink href="https://github.com/" target="_blank" rel="noopener" className="footer-link">
                    GitHub
                </MuiLink>
            </Box>

            <Typography variant="caption" className="footer-copy">
                © {new Date().getFullYear()} The Simpsons App. Todos los derechos reservados.
            </Typography>
        </footer>
    );
};

export default Footer;

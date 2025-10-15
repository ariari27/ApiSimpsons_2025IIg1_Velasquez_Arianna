import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './NavBar.css';
import SimpsonsFamily from '../../assets/Image/NavBarImage.png';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => setOpen(!open);

    const menuItems = [
        { text: 'Inicio', link: '/' },
        { text: 'Personajes', link: '/personajes' },
        { text: 'Episodios', link: '/episodios' },
        { text: 'Lugares', link: '/lugares' },
    ];

    return (
        <>
            <AppBar className="navbar-appbar">
                <Toolbar className="navbar">
                    <div className="img-title">
                        <img src={SimpsonsFamily} alt="The Simpsons Family" className="navbar-img" />
                        <Typography variant="h5" component={Link} to="/" className="navbar-title">
                            The Simpsons App
                        </Typography>

                    </div>

                    {/* Botón hamburguesa móvil */}
                    <IconButton color="inherit" edge="end" onClick={toggleDrawer} className="menu-button">
                        <MenuIcon />
                    </IconButton>

                    {/* Botones desktop */}
                    <Box className="navbar-links">
                        {menuItems.map(item => (
                            <Button key={item.text} color="inherit" component={Link} to={item.link} className="navbar-link">
                                {item.text}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <div className="navbar-placeholder"></div>

            {/* Drawer móvil */}
            <Drawer anchor="right" open={open} onClose={toggleDrawer}>
                <Box className="navbar-drawer">
                    <List>
                        {menuItems.map(item => (
                            <ListItem
                                button
                                key={item.text}
                                component={Link}
                                to={item.link}
                                onClick={toggleDrawer}
                                PaperProps={{ style: { width: 'clamp(200px, 25vw, 300px)' } }}
                                className="drawer-item"
                            >
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default NavBar;

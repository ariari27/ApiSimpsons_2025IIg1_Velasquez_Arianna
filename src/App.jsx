import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';
import CharactersPage from './Pages/CharactersPage/CharactersPage.jsx';
import CharactersDetailsPage from './Pages/CharactersDetailsPage/CharactersDetailsPage.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import EpisodesPage from './Pages/EpisodesPage/EpisodesPage.jsx';
import LocationsPage from './Pages/LocationsPage/LocationsPage.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/ApiSimpsons_2025IIg1_Velasquez_Arianna/">
      <NavBar />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inicio" element={<HomePage />} />
          <Route path="/personajes" element={<CharactersPage />} />
          <Route path="/personaje/:id" element={<CharactersDetailsPage />} />
          <Route path="/episodios" element={<EpisodesPage />} />
          <Route path="/lugares" element={<LocationsPage />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

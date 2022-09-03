import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetailsPage from './pages/CountryDetailsPage';
function App() {
  return (
    <>
     <Navbar />
     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/countries' element={<CountriesList />} />
      <Route path='/countries/:id' element={<CountryDetailsPage />} />

     </Routes>
    </>
  );
}

export default App;

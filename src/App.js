
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import { trending,originals,romance,action,documentaries,horrormovies,comedymovies } from './constants';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Originals'/>
      <Rowpost url={trending} title='Trending' isSmall/>
      <Rowpost url={romance} title='Romance' isSmall/>
      <Rowpost url={action} title='Action' isSmall/>
      <Rowpost url={documentaries} title='Documentaries' isSmall/>
      <Rowpost url={horrormovies} title='Horror' isSmall/>
      <Rowpost url={comedymovies} title='Comedy' isSmall/>
    </div>
  );
}

export default App;

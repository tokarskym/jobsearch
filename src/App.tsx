import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import JobOfferList from './Components/JobOffer/JobOfferList';
import GlobalStyles from './Components/GlobalStyles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Navbar/>
      <JobOfferList/>
    </div>
  );
}

export default App;

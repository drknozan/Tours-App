import React, { useState } from 'react'
import Header from './Header';
import ToursList from './ToursList'
import SelectedTours from './SelectedTours';

function App() {
  const [selectedTours, setSelectedTours] = useState([])
  const [active, setActive] = useState(false)
  return (
    <div>
      <Header selectedToursCount={selectedTours.length} active={active} setActive={setActive}></Header>
      <ToursList selectedTours={selectedTours} setSelectedTours={setSelectedTours}></ToursList>
      <SelectedTours selectedTours={selectedTours} active={active}></SelectedTours>
    </div>
  );
}

export default App;

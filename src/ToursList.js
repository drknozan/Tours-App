import React from 'react'
import {tours} from './data'
import Tour from './Tour'

const ToursList = ({ selectedTours, setSelectedTours }) => {
    const toursList = tours.map((tour) => <Tour key={tour.id} tourData={tour} selectedTours={selectedTours} setSelectedTours={setSelectedTours}></Tour>)
    return(
        <div className="tours">
            {toursList}
        </div>
    )
}

export default ToursList
import React from 'react'
import SelectedTour from './SelectedTour'

const SelectedTours = ({ selectedTours, active }) => {
    const selectedToursList = selectedTours.map((tour) => <SelectedTour key={tour.startDate} tourData={tour}></SelectedTour>)
    if(active) {
        return(
            <div className='tours_container'>
                <div className='selected_tours'>
                    {selectedToursList}
                </div>
            </div>
        )
    }
    else{
        return(
            <React.Fragment>
                
            </React.Fragment>
        )
    }
}

export default SelectedTours
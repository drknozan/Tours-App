import React from 'react'

const SelectedTour = ({ tourData }) => {
    return (
        <div className='selected_tour'>
            <div className='selected_tour__destination'>
                {tourData.destination}
            </div>
            <img className='selected_tour__image' src={tourData.image} alt='destination_img'></img>
            <div className='selected_tour__dates'>
                <div className='selected_tour__start'>
                    Start Date: {tourData.startDate}
                </div>
                <div className='selected_tour__end'>
                    End Date: {tourData.endDate}
                </div>
            </div>
        </div>
    )
}

export default SelectedTour
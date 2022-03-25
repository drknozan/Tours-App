import React, { useState} from 'react'

const Tour = ({ tourData, selectedTours, setSelectedTours }) => {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const sTour = {
            destination: tourData.destination,
            image: tourData.image,
            startDate: startDate,
            endDate: endDate,
        }
        setSelectedTours([...selectedTours, sTour])
    }

    return (
        <div className="tour">
            <h1 className='tour__title'>{tourData.destination}</h1>
            <img className="tour__image" src={tourData.image} alt='destination_img'></img> 
            <p className="tour__description">
                {tourData.description}
            </p>
            <form className="tour__reservation" onSubmit={handleSubmit}>
                <div className='tour__date__container'>
                    <label>Start Date:</label>
                    <input className="tour__date" type="date" onChange={(event) => setStartDate(event.target.value)}/>
                    <label>End Date:</label>
                    <input className="tour__date" type="date" onChange={(event) => setEndDate(event.target.value)}/>
                </div>
                <button type="submit" className='tour__add'>Add</button>
            </form>
        </div>
    )
}

export default Tour
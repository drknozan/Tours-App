import React from 'react'
import { Flight } from '@mui/icons-material'
import { Badge } from '@mui/material'

const Header = ({ selectedToursCount, active, setActive }) => {
    return(
        <div className="header">
            <div className="header__about">
                About
            </div>
            <div className="header__logo">
                Tours.
            </div>
            <div className="header__tours">
                <Badge badgeContent={selectedToursCount} color='secondary'>
                    <Flight fontSize='large' onClick={() => {active ? setActive(false) : setActive(true)}}/>
                </Badge>
            </div>
        </div>
    )
}

export default Header
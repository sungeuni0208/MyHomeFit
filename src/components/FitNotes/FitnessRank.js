import React from 'react';
import '../../css/FitNotes/FitnessRank.css';
import Fitness from '../../components/FitNotes/Fitness'

const FitnessRank = ({name}) => {
    return(
        <div className='rank-fitness-container'>
            <label>{name} 3 Fitness</label>
            <div>
                <Fitness/>
                <Fitness/>
                <Fitness/>
            </div>
        </div>
    )
}

export default FitnessRank;
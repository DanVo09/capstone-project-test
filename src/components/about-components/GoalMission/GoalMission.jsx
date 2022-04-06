import React from 'react'
import GoalMissionData from './GoalMissionData' 

export default function GoalMission() {
 return (
    <>
    {GoalMissionData.map((obj, id) => {
        return (
            <div key={obj.id}>
                <h3>{obj.title}</h3>
                <p>{obj.description}</p>
            </div>
        )
        
    })}
    </>
 )
}
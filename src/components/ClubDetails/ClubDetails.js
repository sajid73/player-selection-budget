import React from 'react';
import AllPlayer from '../AllPlayer/AllPlayer';


const ClubDetails = (props) => {
    const player = props.players
    let totalExpense = 0;
    player.map(salary => {
        totalExpense += salary.salary;
    })
    return (
        <div style={{color: 'white'}}>
            <h4>Number of player added : {player.length}</h4>
            <AllPlayer player={player}></AllPlayer>
            <h5>Total budget: ${totalExpense}</h5>
        </div>
    );
};

export default ClubDetails;
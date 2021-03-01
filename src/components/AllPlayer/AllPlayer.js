import React, { useEffect, useState } from 'react';

const AllPlayer = (props) => {
    return (
        <div>
            {
                props.player.map(player => <p>{player.name} (${player.salary})</p> )
            }
        </div>
    );
};

export default AllPlayer;
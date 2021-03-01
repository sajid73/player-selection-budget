import React from 'react';

const ClubTitle = () => {
    const ClubTitle = {textAlign: 'center', color: 'white'}
    return (
        <div>
            <h1 style={ClubTitle}>Manchester United team maker</h1>
            <h5 style={{textAlign: 'left'}}>Create team for upcoming match:</h5>
        </div>
    );
};

export default ClubTitle;
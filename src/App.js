import { useEffect, useState } from 'react';
import './App.css';
import ClubTitle from './components/ClubTitle/ClubTitle';
import PlayerDetails from './components/PlayerDetails/PlayerDetails';
import player from './MOCK_DATA.json';
import ClubDetails from './components/ClubDetails/ClubDetails';

function App() {
  useEffect(() => {
    document.title = "Manchester United team maker"
  }, [])
  const [players, setPlayers] = useState([])
  useEffect(() => {
    setPlayers(player)
  }, [])
  const [finalPlayer, setfinalPlayer] = useState([])

  const playerAddingTeam = (player) => {
    const playerList = [...finalPlayer, player]
    setfinalPlayer(playerList)
  }
  return (
    <div className="App">
      <header>
        <ClubTitle></ClubTitle>
      </header>
      <div style={{float: 'left', width: '70vw'}}>
        {
          players.map(element => <PlayerDetails playerAddingTeam={playerAddingTeam} player={element}></PlayerDetails>)
        }
      </div>
      <div style={{float: 'left'}}>
        <ClubDetails players={finalPlayer}></ClubDetails>
      </div>

    </div>
  );
}

export default App;
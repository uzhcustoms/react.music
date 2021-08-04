import './App.css';
import { MusicGroup } from './Components/MusicGroup';
import { Albums } from './Components/Albums';
import React from 'react';

function App() {
  let music = {
    qTitle: "Prodigy",
    qParticipants: "Liam Paul Paris Howlett, Keith Palmer",
    qAlbums: [{ name: "World’s on Fire", imgUrl: "https://upload.wikimedia.org/wikipedia/ru/thumb/7/71/The_Prodigy_World%27s_On_Fire.jpg/274px-The_Prodigy_World%27s_On_Fire.jpg" },
    { name: "Music for the Jilted Generation", imgUrl: "https://upload.wikimedia.org/wikipedia/ru/0/02/The_Prodigy_%E2%80%94_Music_For_The_Jilted_Generation.jpg" },
    { name: "The Day Is My Enemy", imgUrl: "https://upload.wikimedia.org/wikipedia/ru/e/e0/The_Day_Is_My_Enemy_album_cover.jpg" },
    { name: "Experience", imgUrl: "https://upload.wikimedia.org/wikipedia/ru/c/c5/The_Prodigy_%E2%80%94_Experience.jpeg" },
    { name: "The Fat of the Land", imgUrl: "https://upload.wikimedia.org/wikipedia/ru/0/0f/The_Fat_Of_The_Land.jpg" }
    ]
  };

  let { qTitle, qParticipants, qAlbums } = music;

  return (
    <div className="App">
      <h1>Любимая музика</h1>
      <MusicGroup title={qTitle} participants={qParticipants} />
      <Albums albums={qAlbums.map(item => (<div className="albums-item"><p>{item.name}</p><img width="80%" src={item.imgUrl}></img></div>))} />
    </div>
  )
}
export default App;

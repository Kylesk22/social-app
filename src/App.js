import React from 'react';
import SpotterNav from './Components/Navbar';
import ProfilePic from './Components/ProfilePicture';
import NavTabs from './Components/NavTabs';


function App() {
  return (
    <div className="App" id="App">
        <SpotterNav />
        <ProfilePic />
        <NavTabs />
    </div>
  );
}

export default App;

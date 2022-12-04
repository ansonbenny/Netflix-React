import './App.css'
import {useState} from 'react'
import NavBar from './COMPONETS/NavBar/NavBar';
import Banner from './COMPONETS/Banner/Banner';
import RowPost from './COMPONETS/RowPost/RowPost';
import url from './url';

function App() {
  return (
      <div>
        <NavBar/>
        <Banner/>
        <RowPost link={url.orginals} />
        <RowPost isSmall title={'Action'} link={url.action}/>
        <RowPost isSmall title={'Comedy'} link={url.comedy} />
        <RowPost isSmall title={'Documentaries'} link={url.documentaries}/>
      </div>
  );
}

export default App;

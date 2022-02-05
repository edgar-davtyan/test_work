import React, { useState, useEffect } from 'react';
import './App.css';
import Layouts from './layouts';
import FetchData from './component/fetchCats/FetchCats';

const Context = React.createContext();

function App() {
  const [catsData, setCatsData] = useState()
  const [id, setId] = useState();

  useEffect(() => {
    const data = FetchData(id);
    setCatsData(data)
  }, [id])


  return (
    <div className="App">
      <Context.Provider value={catsData} >
        <Layouts context={Context} setId={setId} />
      </Context.Provider>
    </div>
  );
}

export default App;

import './App.css';
import AllItems from './components/Items/AllItems'
import Item from './components/Items/Item'
import Creator from './components/Creators/Creator'
import AllCreators from './components/Creators/AllCreators'
import axios from 'axios';

import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom'

const API_url = 'http://localhost:8000/inventory/'

function App() {

  const [items, setItems] = useState([]);
  const [creators, setCreators] = useState([]);
  
  async function getItems() {
    try {
      const response = await axios.get(`${API_url}items/`);
      const data = response.data;
      setItems(data);
    } catch (error) {
      console.error('Error fetching items', error);
    }
  }
  
  async function getCreators() {
    try {
      const response = await axios.get(`${API_url}creators/`);
      const data = response.data;
      setCreators(data);
    } catch (error) {
      console.error('Error fetching creators', error);
    }
  }
  
  function handleBid (event) {
    if (event.key === 'click' ) {
      getBidForm()
    }
  }

  useEffect(() => {
    getItems();
    getCreators();
  }, []);


  return (
    <div>
      <nav>
        <h1>THE GALLERY</h1>
          <ul>
            <li><a href={"/items/all/"}>ART</a></li>
            <li><a href={"/events/"}>EVENTS</a></li>
          </ul>
      </nav>
      <Routes>
        <Route 
          exact path="/items/all/" 
          element={<AllItems items={items} />} />
        <Route
          path="/items/:id"
          element={<Item handleBid={handleBid}/>}
        />
        <Route
          path="/creators/"
          element={<AllCreators creators={creators} />}
        />
        <Route
          path="/creators/:id"
          element={<Creator creators={creators} />}
        />
      </Routes>
    </div>

  );
}

export default App;

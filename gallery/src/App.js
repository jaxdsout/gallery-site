import './App.css';
import AllItems from './Items/AllItems'
import Item from './Items/Item'
import Creator from './Creators/Creator'
import AllCreators from './Creators/AllCreators'
import axios from 'axios';

import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom'

const API_url = 'http://localhost:8000/inventory/'

function App(props) {

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
  
  useEffect(() => {
    getItems();
    getCreators();
  }, []);


  return (
    <div>
      <h1>Gallery</h1>
      <Routes>
        <Route 
          exact path="/" 
          element={<AllItems items={items} />} />
        <Route
          path="/items/:id"
          element={<Item items={items} />}
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

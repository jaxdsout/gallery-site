import './App.css';
import AllItems from './pages/ItemsAll'
import Item from './pages/ItemDetail'
import Creator from './pages/CreatorDetail'
import AllCreators from './pages/CreatorsAll'
import Bid from './components/Bid';
import axios from 'axios';

import React, {useState, useEffect} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom'

const API_url = 'http://localhost:8000/inventory'

function App() {
  const [items, setItems] = useState([]);
  const [creators, setCreators] = useState([]);
  const navigate = useNavigate()

  function handleItemClick(item) {
    navigate(`/items/${item.id}`)
  }

  async function getItems() {
    try {
      const response = await axios.get(`${API_url}/items/`);
      const data = response.data;
      setItems(data);
    } catch (error) {
      console.error('Error fetching items', error);
    }
  }
  
  async function getCreators() {
    try {
      const response = await axios.get(`${API_url}/creators/`);
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
      <nav>
        <h1>THE GALLERY</h1>
          <ul>
            <li><a href={"/items/all/"}>ART</a></li>
            <li><a href={"/creators/all/"}>CREATORS</a></li>
          </ul>
      </nav>
      <Routes>
        <Route 
          exact path="/items/all/" 
          element={<AllItems 
            items={items}
            onItemClick={handleItemClick}
             />} />
        <Route
          path="/items/:id"
          element={<Item items={items}/>}
        />
        <Route
          path="/creators/all/"
          element={<AllCreators creators={creators} />}
        />
        <Route
          path="/creators/:id"
          element={<Creator creators={creators} items={items} />}
        />
      </Routes>
    </div>

  );
}

export default App;

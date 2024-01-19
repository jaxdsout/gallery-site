import './App.css';
import AllItems from './pages/ItemsAll'
import ItemDetail from './pages/ItemDetail'
import FeaturedItems from './pages/ItemsFeatured'

import Creator from './pages/CreatorDetail'
import AllCreators from './pages/CreatorsAll'

import AllEvents from './pages/EventsAll';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Home from './pages/Home';

import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom'

const API_url = 'http://localhost:8000/inventory'

function App() {
  const [items, setItems] = useState([]);
  const [creators, setCreators] = useState([]);
  const [events, setEvents] = useState([])
  const navigate = useNavigate();


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

  async function getEvents() {
    try {
      const response = await axios.get(`${API_url}/events/`);
      const data = response.data;
      setEvents(data);
    } catch (error) {
      console.error('Error fetching creators', error);
    }
  }

  useEffect(() => {
    getItems();
    getCreators();
    getEvents()
  }, []);

  // useEffect(() => {
  //   if (window.location.pathname === '/creators/all/') {
  //     getCreators();
  //   }
  // }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home 
              items={items}
              events={events}
            />
          }>
        </Route>
        <Route 
          path="/items/all/" 
          element={
            <AllItems 
              items={items}
              onItemClick={handleItemClick}
            />} 
        />
        <Route
          path="/items/:id/"
          element={<ItemDetail items={items}/>}
        />
        <Route
          path="/items/featured/"
          element={<FeaturedItems items={items}/>}
        />
        <Route
          path="/creators/all/"
          element={<AllCreators creators={creators} />}
        />
        <Route
          path="/creators/:id/"
          element={
            <Creator 
              items={items} 
              creators={creators}
            />}
        />
        <Route
          path="/events/"
          element={<AllEvents events={events} />}
        />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;

import './App.css';
import AllItems from './pages/ItemsAll'
import ItemDetail from './pages/ItemDetail'
import FeaturedItems from './pages/ItemFeatured'

import Creator from './pages/CreatorDetail'
import AllCreators from './pages/CreatorsAll'

import AllEvents from './pages/EventsAll';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Home from './pages/Home';

import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom'


function App() {
  const [items, setItems] = useState([]);
  const [creators, setCreators] = useState([]);
  const [events, setEvents] = useState([]);

  console.log(process.env.REACT_APP_API_URL)
  
  async function getItems() {

    const config = {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
  };

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/items/`, config);
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items', error);
    }
  }
  
  async function getCreators() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/creators/`);
      const data = response.data;
      console.log(response)
      setCreators(data);
    } catch (error) {
      console.error('Error fetching creators', error);
    }
  }

  async function getEvents() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/events/`);
      const data = response.data;
      setEvents(data);
    } catch (error) {
      console.error('Error fetching creators', error);
    }
  }

  
  getCreators();
  getItems();
  getEvents();
  
  console.log(creators, items, events)

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={
          <Home 
            items={items}
            events={events}/>
        }/>
        <Route path="/items/all/" element={
          <AllItems 
            items={items}
          />
        }/>
        <Route path="/items/:id/" element={
          <ItemDetail 
            items={items}
          />}
        />
        <Route path="/items/featured/" element={
          <FeaturedItems items={items}
          />}
        />
        <Route path="/creators/all/" element={
          <AllCreators creators={creators} 
          />}
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

import ItemsAll from './pages/ItemsAll'
import ItemDetail from './pages/ItemDetail'
import FeaturedSet from './pages/FeaturedSet'

import Creator from './pages/Creator'
import AllCreators from './pages/CreatorsAll'

import Events from './pages/Events';
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

  const keyword = 'aerospirit'
  const featured_artist = "David Rhodes"
  
  async function fetchData() {
    try {
      const itemsPromise = axios.get(`${process.env.REACT_APP_API_URL}items/`);
      const creatorsPromise = axios.get(`${process.env.REACT_APP_API_URL}creators/`);
      const eventsPromise = axios.get(`${process.env.REACT_APP_API_URL}events/`);
  
      const [itemsResponse, creatorsResponse, eventsResponse] = await Promise.all([
        itemsPromise,
        creatorsPromise,
        eventsPromise,
      ]);
  
      setItems(itemsResponse.data);
      setCreators(creatorsResponse.data);
      setEvents(eventsResponse.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }
  
  useEffect(() => {
    fetchData();
    console.log("firing use effect")
  }, []);
  
  return (
    <div className='flex flex-col justify-center w-screen'>
      <Header />
      <Routes>
        <Route path="/" element={
          <Home 
            items={items}
            events={events}
            featured_artist={featured_artist}
            keyword={keyword}
          />
        }/>
        <Route path="/items/all/" element={
          <ItemsAll 
            items={items}
          />
        }/>
        <Route path="/items/:id/" element={
          <ItemDetail 
            items={items}
          />}
        />
        <Route path="/items/featured/" element={
          <FeaturedSet 
            items={items} 
            featured_artist={featured_artist}
            keyword={keyword}
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
          element={<Events events={events} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

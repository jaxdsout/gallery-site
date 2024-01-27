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
import React, {useState, useEffect, useCallback} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom'

const API_url = 'http://localhost:8000/inventory'

function App() {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [creators, setCreators] = useState([]);
  const [events, setEvents] = useState([]);

  const [results, setResults] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [category, setCategory] = useState('')
  const [emptyResults, setEmptyResults] = useState(false);


  function handleSearch (event) {
    setSearchString(event.target.value)
  }

  function handleSubmit (event) { 
    if (event.key === 'Enter' || event.type === 'click') {
      if (searchString.length > 0) {
        searchItems(searchString)
      }
    }
  }

  function handleCategory (userChoice) {
    setCategory(userChoice);
  }

  function handleItemClick(item) {
    navigate(`/items/${item.id}`)
  }

  const displayEmptyResults = () => {
    setEmptyResults(true)
  }

  const searchItems = useCallback((searchString) => {
    const userSearch = encodeURIComponent(searchString)
    const url = `${API_url}/items/?search=${userSearch}&category=${category}`;
    axios.get(url)
      .then((res) => {
        if (res.data.length === 0) {
          displayEmptyResults();
        }
        setResults(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [category])

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
            results={results}
            onItemClick={handleItemClick}
            searchString={searchString} 
            handleSearch={handleSearch}
            handleSubmit={handleSubmit}
            handleCategory={handleCategory}
            emptyResults={emptyResults}
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

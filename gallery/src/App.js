import './App.css';
import AllItems from './pages/ItemsAll'
import Item from './pages/ItemDetail'
import Creator from './pages/CreatorDetail'
import AllCreators from './pages/CreatorsAll'
import Bid from './components/Bid';
import axios from 'axios';

import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom'

const API_url = 'http://localhost:8000/inventory/'
const bid_url = 'http://localhost:8000/inventory/make-bid'


function App() {

  const [items, setItems] = useState([]);
  const [creators, setCreators] = useState([]);
  const [bid, setBid] = useState(null);


  // const handleBid = async (bid, event, item) => {
  //   event.preventDefault();
  //   setBid(event.target.value);
  //   console.log(item)
    
  //   try {
  //     const response = await axios.post(
  //       `${bid_url}`, 
  //       {
  //         item_id: item.id,
  //         item: item,
  //         amount: parseInt(bid)
  //       },
  //       {
  //         headers: {
  //           "Content-Type":"application/json"
  //         }
  //       });
  //     const data = response.data;
  //     setBid(data);
  //   } catch (error) {
  //     console.error("Error submitting bid:", error);
  //   }
  // }

  const handleBid = async (bid, event) => {
    event.preventDefault();
    setBid(event.target.value);
    try {
      const res =  await fetch(`${bid_url}`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(bid)
      } )
      const newBid = await res.json();

      if(newBid.id){
        getItems();
      }else {
        throw new Error("Something went wrong")
      }

    } catch (error) {
        console.error(error)
    }
  }

  
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
          element={<AllItems items={items} />} />
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
        <Route
          path="/bid/"
          element={<Bid handleBid={handleBid} bid={bid} />}
        />
      </Routes>
    </div>

  );
}

export default App;

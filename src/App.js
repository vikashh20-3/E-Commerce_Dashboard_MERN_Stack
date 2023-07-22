import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Nav from './component/Nav';
import SignUp from './component/SignUp';
function App() {
  return (
    <div className="App">
<BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={ <h1>Product Listing Components</h1>}/>
        <Route path='/add' element={ <h1>Add Product Listing </h1>}/>
        <Route path='/update' element={ <h1>Product Listing Update</h1>}/>
        <Route path='/logout' element={ <h1>Logout</h1>}/>
        <Route path='/profile' element={ <h1>Profile page</h1>}/>
        <Route path='/Sign' element={ <SignUp/>}/>
      </Routes>
    <Footer/>
</BrowserRouter>
    </div>
  );
}

export default App;
